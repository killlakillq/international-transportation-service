import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { VehicleRepository } from './vehicle.repository';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';

describe('VehicleService', () => {
  let service: VehicleService;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let repository: VehicleRepository;

  const mockVehicleRepository = {
    createVehicle: jest.fn(),
    find: jest.fn(),
    findById: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VehicleService,
        {
          provide: VehicleRepository,
          useValue: mockVehicleRepository,
        },
      ],
    }).compile();

    service = module.get<VehicleService>(VehicleService);
    repository = module.get<VehicleRepository>(VehicleRepository);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('create', () => {
    it('should create a vehicle successfully', async () => {
      const createVehicleDto: CreateVehicleDto = {
        licensePlate: 'ABC123',
        vehicleType: 'Truck',
        maxCapacity: 1000,
      };
      const expectedVehicle = { id: '1', ...createVehicleDto };
      mockVehicleRepository.createVehicle.mockResolvedValue(expectedVehicle);

      const result = await service.create(createVehicleDto);

      expect(result).toEqual(expectedVehicle);
      expect(mockVehicleRepository.createVehicle).toHaveBeenCalledWith(
        createVehicleDto,
      );
    });
  });

  describe('find', () => {
    it('should return all vehicles', async () => {
      const expectedVehicles = [
        {
          id: '1',
          plateNumber: 'ABC123',
          type: 'Truck',
          capacity: 1000,
          status: 'Available',
        },
        {
          id: '2',
          plateNumber: 'XYZ789',
          type: 'Van',
          capacity: 500,
          status: 'InUse',
        },
      ];
      mockVehicleRepository.find.mockResolvedValue(expectedVehicles);

      const result = await service.find();

      expect(result).toEqual(expectedVehicles);
      expect(mockVehicleRepository.find).toHaveBeenCalled();
    });
  });

  describe('findById', () => {
    it('should return a vehicle when it exists', async () => {
      const vehicleId = '1';
      const expectedVehicle = {
        id: vehicleId,
        plateNumber: 'ABC123',
        type: 'Truck',
        capacity: 1000,
        status: 'Available',
      };
      mockVehicleRepository.findById.mockResolvedValue(expectedVehicle);

      const result = await service.findById(vehicleId);

      expect(result).toEqual(expectedVehicle);
      expect(mockVehicleRepository.findById).toHaveBeenCalledWith(vehicleId);
    });

    it('should throw NotFoundException when vehicle does not exist', async () => {
      const vehicleId = '1';
      mockVehicleRepository.findById.mockResolvedValue(null);

      await expect(service.findById(vehicleId)).rejects.toThrow(
        NotFoundException,
      );
      expect(mockVehicleRepository.findById).toHaveBeenCalledWith(vehicleId);
    });
  });

  describe('update', () => {
    it('should update a vehicle successfully', async () => {
      const vehicleId = '1';
      const updateVehicleDto: UpdateVehicleDto = {
        licensePlate: 'ABC123',
        vehicleType: 'Truck',
        maxCapacity: 1000,
      };
      const existingVehicle = {
        id: vehicleId,
        licensePlate: 'ABC123',
        vehicleType: 'Truck',
        maxCapacity: 1000,
      };
      const updatedVehicle = { ...existingVehicle, ...updateVehicleDto };

      mockVehicleRepository.findById.mockResolvedValue(existingVehicle);
      mockVehicleRepository.update.mockResolvedValue(updatedVehicle);

      const result = await service.update(vehicleId, updateVehicleDto);

      expect(result).toEqual(updatedVehicle);
      expect(mockVehicleRepository.findById).toHaveBeenCalledWith(vehicleId);
      expect(mockVehicleRepository.update).toHaveBeenCalledWith(
        vehicleId,
        updateVehicleDto,
      );
    });

    it('should throw NotFoundException when updating non-existent vehicle', async () => {
      const vehicleId = '1';
      const updateVehicleDto: UpdateVehicleDto = {
        licensePlate: 'ABC123',
        vehicleType: 'Truck',
        maxCapacity: 1000,
      };
      mockVehicleRepository.findById.mockResolvedValue(null);

      await expect(service.update(vehicleId, updateVehicleDto)).rejects.toThrow(
        NotFoundException,
      );
      expect(mockVehicleRepository.findById).toHaveBeenCalledWith(vehicleId);
      expect(mockVehicleRepository.update).not.toHaveBeenCalled();
    });
  });

  describe('delete', () => {
    it('should delete a vehicle successfully', async () => {
      const vehicleId = '1';
      const existingVehicle = {
        id: vehicleId,
        licensePlate: 'ABC123',
        vehicleType: 'Truck',
        maxCapacity: 1000,
      };
      mockVehicleRepository.findById.mockResolvedValue(existingVehicle);
      mockVehicleRepository.delete.mockResolvedValue({
        id: vehicleId,
        deleted: true,
      });

      const result = await service.delete(vehicleId);

      expect(result).toEqual({ id: vehicleId, deleted: true });
      expect(mockVehicleRepository.findById).toHaveBeenCalledWith(vehicleId);
      expect(mockVehicleRepository.delete).toHaveBeenCalledWith(vehicleId);
    });

    it('should throw NotFoundException when deleting non-existent vehicle', async () => {
      const vehicleId = '1';
      mockVehicleRepository.findById.mockResolvedValue(null);

      await expect(service.delete(vehicleId)).rejects.toThrow(
        NotFoundException,
      );
      expect(mockVehicleRepository.findById).toHaveBeenCalledWith(vehicleId);
      expect(mockVehicleRepository.delete).not.toHaveBeenCalled();
    });
  });
});
