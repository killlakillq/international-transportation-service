import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { ShipmentService } from './shipment.service';
import { ShipmentRepository } from './shipment.repository';
import { CreateShipmentDto } from './dto/create-shipment.dto';
import { UpdateShipmentDto } from './dto/update-shipment.dto';
import { ShipmentStatus } from '@/common/interfaces/enums/shipment-status.enum';

describe('ShipmentService', () => {
  let service: ShipmentService;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let repository: ShipmentRepository;

  const mockShipmentRepository = {
    createShipment: jest.fn(),
    find: jest.fn(),
    findById: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ShipmentService,
        {
          provide: ShipmentRepository,
          useValue: mockShipmentRepository,
        },
      ],
    }).compile();

    service = module.get<ShipmentService>(ShipmentService);
    repository = module.get<ShipmentRepository>(ShipmentRepository);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('create', () => {
    it('should create a shipment successfully', async () => {
      const createShipmentDto: CreateShipmentDto = {
        trackingNumber: '1234567890',
        weight: 100,
        status: ShipmentStatus.Pending,
      };
      const expectedShipment = { id: '1', ...createShipmentDto };
      mockShipmentRepository.createShipment.mockResolvedValue(expectedShipment);

      const result = await service.create(createShipmentDto);

      expect(result).toEqual(expectedShipment);
      expect(mockShipmentRepository.createShipment).toHaveBeenCalledWith(
        createShipmentDto,
      );
    });
  });

  describe('find', () => {
    it('should return all shipments', async () => {
      const expectedShipments = [
        {
          id: '1',
          trackingNumber: '1234567890',
          weight: 100,
          status: ShipmentStatus.Pending,
        },
        {
          id: '2',
          trackingNumber: '1234567890',
          weight: 100,
          status: ShipmentStatus.InTransit,
        },
      ];
      mockShipmentRepository.find.mockResolvedValue(expectedShipments);

      const result = await service.find();

      expect(result).toEqual(expectedShipments);
      expect(mockShipmentRepository.find).toHaveBeenCalled();
    });
  });

  describe('findById', () => {
    it('should return a shipment when it exists', async () => {
      const shipmentId = '1';
      const expectedShipment = {
        id: shipmentId,
        trackingNumber: '1234567890',
        weight: 100,
        status: ShipmentStatus.Pending,
      };
      mockShipmentRepository.findById.mockResolvedValue(expectedShipment);

      const result = await service.findById(shipmentId);

      expect(result).toEqual(expectedShipment);
      expect(mockShipmentRepository.findById).toHaveBeenCalledWith(shipmentId);
    });

    it('should throw NotFoundException when shipment does not exist', async () => {
      const shipmentId = '1';
      mockShipmentRepository.findById.mockResolvedValue(null);

      await expect(service.findById(shipmentId)).rejects.toThrow(
        NotFoundException,
      );
      expect(mockShipmentRepository.findById).toHaveBeenCalledWith(shipmentId);
    });
  });

  describe('update', () => {
    it('should update a shipment successfully', async () => {
      const shipmentId = '1';
      const updateShipmentDto: UpdateShipmentDto = {
        trackingNumber: '1234567890',
        weight: 100,
        status: ShipmentStatus.InTransit,
      };
      const existingShipment = {
        id: shipmentId,
        trackingNumber: '1234567890',
        weight: 100,
        status: ShipmentStatus.Pending,
      };
      const updatedShipment = { ...existingShipment, ...updateShipmentDto };

      mockShipmentRepository.findById.mockResolvedValue(existingShipment);
      mockShipmentRepository.update.mockResolvedValue(updatedShipment);

      const result = await service.update(shipmentId, updateShipmentDto);

      expect(result).toEqual(updatedShipment);
      expect(mockShipmentRepository.findById).toHaveBeenCalledWith(shipmentId);
      expect(mockShipmentRepository.update).toHaveBeenCalledWith(
        shipmentId,
        updateShipmentDto,
      );
    });

    it('should throw NotFoundException when updating non-existent shipment', async () => {
      const shipmentId = '1';
      const updateShipmentDto: UpdateShipmentDto = {
        trackingNumber: '1234567890',
        weight: 100,
        status: ShipmentStatus.InTransit,
      };
      mockShipmentRepository.findById.mockResolvedValue(null);

      await expect(
        service.update(shipmentId, updateShipmentDto),
      ).rejects.toThrow(NotFoundException);
      expect(mockShipmentRepository.findById).toHaveBeenCalledWith(shipmentId);
      expect(mockShipmentRepository.update).not.toHaveBeenCalled();
    });
  });

  describe('delete', () => {
    it('should delete a shipment successfully', async () => {
      const shipmentId = '1';
      const existingShipment = {
        id: shipmentId,
        trackingNumber: '1234567890',
        weight: 100,
        status: ShipmentStatus.Pending,
      };
      mockShipmentRepository.findById.mockResolvedValue(existingShipment);
      mockShipmentRepository.delete.mockResolvedValue({
        id: shipmentId,
        deleted: true,
      });

      const result = await service.delete(shipmentId);

      expect(result).toEqual({ id: shipmentId, deleted: true });
      expect(mockShipmentRepository.findById).toHaveBeenCalledWith(shipmentId);
      expect(mockShipmentRepository.delete).toHaveBeenCalledWith(shipmentId);
    });

    it('should throw NotFoundException when deleting non-existent shipment', async () => {
      const shipmentId = '1';
      mockShipmentRepository.findById.mockResolvedValue(null);

      await expect(service.delete(shipmentId)).rejects.toThrow(
        NotFoundException,
      );
      expect(mockShipmentRepository.findById).toHaveBeenCalledWith(shipmentId);
      expect(mockShipmentRepository.delete).not.toHaveBeenCalled();
    });
  });
});
