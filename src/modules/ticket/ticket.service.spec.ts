import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketRepository } from './ticket.repository';
import { RedisService } from '@/database/redis/redis.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Ticket } from './entities/ticket.entity';
import { TicketStatus } from '@/common/interfaces/enums/ticket-status.enum';
import { Role } from '@/common/interfaces/enums/role.enum';
import { User } from '@/modules/user/entities/user.entity';
import { Shipment } from '@/modules/shipment/entities/shipment.entity';
import { Order } from '@/modules/order/entities/order.entity';

describe('TicketService', () => {
  let service: TicketService;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let ticketRepository: TicketRepository;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let redisService: RedisService;

  const mockUser: User = {
    id: 'user-123',
    name: 'Test User',
    email: 'test@example.com',
    password: 'hashed-password',
    refreshToken: null,
    phone: '+1234567890',
    role: Role.Customer,
    createdAt: new Date('2025-03-30'),
    shipments: [] as Shipment[],
    orders: [] as Order[],
  };

  const mockTicketRepository = {
    createTicket: jest.fn(),
    find: jest.fn(),
    findById: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  const mockRedisService = {
    get: jest.fn(),
    set: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TicketService,
        {
          provide: TicketRepository,
          useValue: mockTicketRepository,
        },
        {
          provide: RedisService,
          useValue: mockRedisService,
        },
      ],
    }).compile();

    service = module.get<TicketService>(TicketService);
    ticketRepository = module.get<TicketRepository>(TicketRepository);
    redisService = module.get<RedisService>(RedisService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('create', () => {
    it('should create a new ticket', async () => {
      const createTicketDto: CreateTicketDto = {
        issue: 'Test Issue',
        status: TicketStatus.Opened,
      };
      const expectedTicket: Ticket = {
        id: '123',
        ...createTicketDto,
        createdAt: new Date(Date.now()),
        user: mockUser,
      };

      mockTicketRepository.createTicket.mockResolvedValue(expectedTicket);

      const result = await service.create(createTicketDto);

      expect(result).toEqual(expectedTicket);
      expect(mockTicketRepository.createTicket).toHaveBeenCalledWith(
        createTicketDto,
      );
    });
  });

  describe('find', () => {
    it('should return all tickets', async () => {
      const expectedTickets: Ticket[] = [
        {
          id: '123',
          issue: 'Test Issue 1',
          status: TicketStatus.Opened,
          createdAt: new Date('2025-03-30'),
          user: mockUser,
        },
        {
          id: '456',
          issue: 'Test Issue 2',
          status: TicketStatus.Closed,
          createdAt: new Date('2025-03-30'),
          user: mockUser,
        },
      ];

      mockTicketRepository.find.mockResolvedValue(expectedTickets);

      const result = await service.find();

      expect(result).toEqual(expectedTickets);
      expect(mockTicketRepository.find).toHaveBeenCalled();
    });
  });

  describe('findById', () => {
    it('should return ticket from cache if available', async () => {
      const ticketId = '123';
      const cachedTicket: Ticket = {
        id: ticketId,
        issue: 'Test Issue',
        status: TicketStatus.Opened,
        createdAt: new Date('2024-01-01T12:00:00Z'),
        user: mockUser,
      };

      const serializedTicket = JSON.stringify(
        cachedTicket,
        (_key: string, value: unknown) => {
          if (value instanceof Date) {
            return value.toISOString();
          }
          return value;
        },
      );

      mockRedisService.get.mockResolvedValue(serializedTicket);

      const result = await service.findById(ticketId);

      const parsedResult = {
        ...result,
        createdAt: new Date(result.createdAt),
        user: {
          ...result.user,
          createdAt: new Date(result.user.createdAt),
        },
      };

      expect(parsedResult).toEqual(cachedTicket);
      expect(mockRedisService.get).toHaveBeenCalledWith(`ticket:${ticketId}`);
      expect(mockTicketRepository.findById).not.toHaveBeenCalled();
    });

    it('should return ticket from repository if not in cache', async () => {
      const ticketId = '123';
      const ticket: Ticket = {
        id: ticketId,
        issue: 'Test Issue',
        status: TicketStatus.Opened,
        createdAt: new Date('2024-01-01T12:00:00Z'),
        user: mockUser,
      };

      mockRedisService.get.mockResolvedValue(null);
      mockTicketRepository.findById.mockResolvedValue(ticket);

      const result = await service.findById(ticketId);

      expect(result).toEqual(ticket);
      expect(mockRedisService.get).toHaveBeenCalledWith(`ticket:${ticketId}`);
      expect(mockTicketRepository.findById).toHaveBeenCalledWith(ticketId);
      expect(mockRedisService.set).toHaveBeenCalledWith(
        `ticket:${ticketId}`,
        JSON.stringify(ticket),
        60 * 60 * 24,
      );
    });

    it('should throw NotFoundException if ticket not found', async () => {
      const ticketId = '123';

      mockRedisService.get.mockResolvedValue(null);
      mockTicketRepository.findById.mockResolvedValue(null);

      await expect(service.findById(ticketId)).rejects.toThrow(
        NotFoundException,
      );
      expect(mockRedisService.get).toHaveBeenCalledWith(`ticket:${ticketId}`);
      expect(mockTicketRepository.findById).toHaveBeenCalledWith(ticketId);
    });
  });

  describe('update', () => {
    it('should update an existing ticket', async () => {
      const ticketId = '123';
      const updateTicketDto: UpdateTicketDto = {
        status: TicketStatus.Closed,
      };
      const existingTicket: Ticket = {
        id: ticketId,
        issue: 'Test Issue',
        status: TicketStatus.Opened,
        createdAt: new Date('2025-03-30'),
        user: mockUser,
      };
      const updatedTicket: Ticket = {
        ...existingTicket,
        ...updateTicketDto,
      };

      mockRedisService.get.mockResolvedValue(JSON.stringify(existingTicket));
      mockTicketRepository.update.mockResolvedValue(updatedTicket);

      const result = await service.update(ticketId, updateTicketDto);

      expect(result).toEqual(updatedTicket);
      expect(mockTicketRepository.update).toHaveBeenCalledWith(
        ticketId,
        updateTicketDto,
      );
    });
  });

  describe('delete', () => {
    it('should delete an existing ticket', async () => {
      const ticketId = '123';
      const existingTicket: Ticket = {
        id: ticketId,
        issue: 'Test Issue',
        status: TicketStatus.Opened,
        createdAt: new Date('2025-03-30'),
        user: mockUser,
      };

      mockRedisService.get.mockResolvedValue(JSON.stringify(existingTicket));
      mockTicketRepository.delete.mockResolvedValue({ affected: 1 });

      await service.delete(ticketId);

      expect(mockTicketRepository.delete).toHaveBeenCalledWith(ticketId);
    });
  });
});
