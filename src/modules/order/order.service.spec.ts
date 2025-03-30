import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderRepository } from './order.repository';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderStatus } from '@/common/interfaces/enums/order-status.enum';

describe('OrderService', () => {
  let service: OrderService;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let repository: OrderRepository;

  const mockOrderRepository = {
    createOrder: jest.fn(),
    find: jest.fn(),
    findById: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrderService,
        {
          provide: OrderRepository,
          useValue: mockOrderRepository,
        },
      ],
    }).compile();

    service = module.get<OrderService>(OrderService);
    repository = module.get<OrderRepository>(OrderRepository);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('create', () => {
    it('should create an order successfully', async () => {
      const createOrderDto: CreateOrderDto = {
        totalAmount: 100,
        status: OrderStatus.Pending,
      };
      const expectedOrder = { id: '1', ...createOrderDto };
      mockOrderRepository.createOrder.mockResolvedValue(expectedOrder);

      const result = await service.create(createOrderDto);

      expect(result).toEqual(expectedOrder);
      expect(mockOrderRepository.createOrder).toHaveBeenCalledWith(
        createOrderDto,
      );
    });
  });

  describe('find', () => {
    it('should return all orders', async () => {
      const expectedOrders = [
        { id: '1', customerName: 'John Doe' },
        { id: '2', customerName: 'Jane Doe' },
      ];
      mockOrderRepository.find.mockResolvedValue(expectedOrders);

      const result = await service.find();

      expect(result).toEqual(expectedOrders);
      expect(mockOrderRepository.find).toHaveBeenCalled();
    });
  });

  describe('findById', () => {
    it('should return an order when it exists', async () => {
      const orderId = '1';
      const expectedOrder = { id: orderId, customerName: 'John Doe' };
      mockOrderRepository.findById.mockResolvedValue(expectedOrder);

      const result = await service.findById(orderId);

      expect(result).toEqual(expectedOrder);
      expect(mockOrderRepository.findById).toHaveBeenCalledWith(orderId);
    });

    it('should throw NotFoundException when order does not exist', async () => {
      const orderId = '1';
      mockOrderRepository.findById.mockResolvedValue(null);

      await expect(service.findById(orderId)).rejects.toThrow(
        NotFoundException,
      );
      expect(mockOrderRepository.findById).toHaveBeenCalledWith(orderId);
    });
  });

  describe('update', () => {
    it('should update an order successfully', async () => {
      const orderId = '1';
      const updateOrderDto: UpdateOrderDto = {
        totalAmount: 200,
        status: OrderStatus.Completed,
      };
      const existingOrder = {
        id: orderId,
        totalAmount: 100,
        status: OrderStatus.Pending,
      };
      const updatedOrder = { ...existingOrder, ...updateOrderDto };

      mockOrderRepository.findById.mockResolvedValue(existingOrder);
      mockOrderRepository.update.mockResolvedValue(updatedOrder);

      const result = await service.update(orderId, updateOrderDto);

      expect(result).toEqual(updatedOrder);
      expect(mockOrderRepository.findById).toHaveBeenCalledWith(orderId);
      expect(mockOrderRepository.update).toHaveBeenCalledWith(
        orderId,
        updateOrderDto,
      );
    });

    it('should throw NotFoundException when updating non-existent order', async () => {
      const orderId = '1';
      const updateOrderDto: UpdateOrderDto = {
        totalAmount: 200,
        status: OrderStatus.Completed,
      };
      mockOrderRepository.findById.mockResolvedValue(null);

      await expect(service.update(orderId, updateOrderDto)).rejects.toThrow(
        NotFoundException,
      );
      expect(mockOrderRepository.findById).toHaveBeenCalledWith(orderId);
      expect(mockOrderRepository.update).not.toHaveBeenCalled();
    });
  });

  describe('delete', () => {
    it('should delete an order successfully', async () => {
      const orderId = '1';
      const existingOrder = { id: orderId, customerName: 'John Doe' };
      mockOrderRepository.findById.mockResolvedValue(existingOrder);
      mockOrderRepository.delete.mockResolvedValue({
        id: orderId,
        deleted: true,
      });

      const result = await service.delete(orderId);

      expect(result).toEqual({ id: orderId, deleted: true });
      expect(mockOrderRepository.findById).toHaveBeenCalledWith(orderId);
      expect(mockOrderRepository.delete).toHaveBeenCalledWith(orderId);
    });

    it('should throw NotFoundException when deleting non-existent order', async () => {
      const orderId = '1';
      mockOrderRepository.findById.mockResolvedValue(null);

      await expect(service.delete(orderId)).rejects.toThrow(NotFoundException);
      expect(mockOrderRepository.findById).toHaveBeenCalledWith(orderId);
      expect(mockOrderRepository.delete).not.toHaveBeenCalled();
    });
  });
});
