import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { InventoryRepository } from './inventory.repository';
import { RedisService } from '@/database/redis/redis.service';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';

describe('InventoryService', () => {
  let service: InventoryService;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let repository: InventoryRepository;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let redisService: RedisService;

  const mockInventoryRepository = {
    createInventory: jest.fn(),
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
        InventoryService,
        {
          provide: InventoryRepository,
          useValue: mockInventoryRepository,
        },
        {
          provide: RedisService,
          useValue: mockRedisService,
        },
      ],
    }).compile();

    service = module.get<InventoryService>(InventoryService);
    repository = module.get<InventoryRepository>(InventoryRepository);
    redisService = module.get<RedisService>(RedisService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('create', () => {
    it('should create an inventory item successfully', async () => {
      const createInventoryDto: CreateInventoryDto = {
        location: 'New York',
        weight: 100,
        productName: 'Product A',
        quantity: 100,
      };
      const expectedInventory = { id: '1', ...createInventoryDto };
      mockInventoryRepository.createInventory.mockResolvedValue(
        expectedInventory,
      );

      const result = await service.create(createInventoryDto);

      expect(result).toEqual(expectedInventory);
      expect(mockInventoryRepository.createInventory).toHaveBeenCalledWith(
        createInventoryDto,
      );
    });
  });

  describe('find', () => {
    it('should return all inventory items', async () => {
      const expectedInventory = [
        {
          id: '1',
          location: 'New York',
          weight: 100,
          productName: 'Product A',
          quantity: 100,
        },
        {
          id: '2',
          location: 'Los Angeles',
          weight: 50,
          productName: 'Product B',
          quantity: 50,
        },
      ];
      mockInventoryRepository.find.mockResolvedValue(expectedInventory);

      const result = await service.find();

      expect(result).toEqual(expectedInventory);
      expect(mockInventoryRepository.find).toHaveBeenCalled();
    });
  });

  describe('findById', () => {
    it('should return an inventory item from cache when available', async () => {
      const inventoryId = '1';
      const cachedInventory = {
        id: inventoryId,
        location: 'New York',
        weight: 100,
        productName: 'Product A',
        quantity: 100,
      };
      mockRedisService.get.mockResolvedValue(JSON.stringify(cachedInventory));

      const result = await service.findById(inventoryId);

      expect(result).toEqual(cachedInventory);
      expect(mockRedisService.get).toHaveBeenCalledWith(
        `inventory:${inventoryId}`,
      );
      expect(mockInventoryRepository.findById).not.toHaveBeenCalled();
    });

    it('should fetch and cache inventory item from repository when not in cache', async () => {
      const inventoryId = '1';
      const inventory = {
        id: inventoryId,
        location: 'New York',
        weight: 100,
        productName: 'Product A',
        quantity: 100,
      };
      mockRedisService.get.mockResolvedValue(null);
      mockInventoryRepository.findById.mockResolvedValue(inventory);

      const result = await service.findById(inventoryId);

      expect(result).toEqual(inventory);
      expect(mockRedisService.get).toHaveBeenCalledWith(
        `inventory:${inventoryId}`,
      );
      expect(mockInventoryRepository.findById).toHaveBeenCalledWith(
        inventoryId,
      );
      expect(mockRedisService.set).toHaveBeenCalledWith(
        `inventory:${inventoryId}`,
        JSON.stringify(inventory),
        60 * 60 * 24,
      );
    });

    it('should throw NotFoundException when inventory item does not exist', async () => {
      const inventoryId = '1';
      mockRedisService.get.mockResolvedValue(null);
      mockInventoryRepository.findById.mockResolvedValue(null);

      await expect(service.findById(inventoryId)).rejects.toThrow(
        NotFoundException,
      );
      expect(mockRedisService.get).toHaveBeenCalledWith(
        `inventory:${inventoryId}`,
      );
      expect(mockInventoryRepository.findById).toHaveBeenCalledWith(
        inventoryId,
      );
      expect(mockRedisService.set).not.toHaveBeenCalled();
    });
  });

  describe('update', () => {
    it('should update an inventory item successfully', async () => {
      const inventoryId = '1';
      const updateInventoryDto: UpdateInventoryDto = {
        quantity: 150,
      };
      const existingInventory = {
        id: inventoryId,
        location: 'New York',
        weight: 100,
        productName: 'Product A',
        quantity: 100,
      };
      const updatedInventory = { ...existingInventory, ...updateInventoryDto };

      mockRedisService.get.mockResolvedValue(null);
      mockInventoryRepository.findById.mockResolvedValue(existingInventory);
      mockInventoryRepository.update.mockResolvedValue(updatedInventory);

      const result = await service.update(inventoryId, updateInventoryDto);

      expect(result).toEqual(updatedInventory);
      expect(mockInventoryRepository.findById).toHaveBeenCalledWith(
        inventoryId,
      );
      expect(mockInventoryRepository.update).toHaveBeenCalledWith(
        inventoryId,
        updateInventoryDto,
      );
    });

    it('should throw NotFoundException when updating non-existent inventory item', async () => {
      const inventoryId = '1';
      const updateInventoryDto: UpdateInventoryDto = {
        quantity: 150,
      };
      mockRedisService.get.mockResolvedValue(null);
      mockInventoryRepository.findById.mockResolvedValue(null);

      await expect(
        service.update(inventoryId, updateInventoryDto),
      ).rejects.toThrow(NotFoundException);
      expect(mockInventoryRepository.findById).toHaveBeenCalledWith(
        inventoryId,
      );
      expect(mockInventoryRepository.update).not.toHaveBeenCalled();
    });
  });

  describe('delete', () => {
    it('should delete an inventory item successfully', async () => {
      const inventoryId = '1';
      const existingInventory = {
        id: inventoryId,
        location: 'New York',
        weight: 100,
        productName: 'Product A',
        quantity: 100,
      };
      mockRedisService.get.mockResolvedValue(null);
      mockInventoryRepository.findById.mockResolvedValue(existingInventory);
      mockInventoryRepository.delete.mockResolvedValue({
        id: inventoryId,
        deleted: true,
      });

      const result = await service.delete(inventoryId);

      expect(result).toEqual({ id: inventoryId, deleted: true });
      expect(mockInventoryRepository.findById).toHaveBeenCalledWith(
        inventoryId,
      );
      expect(mockInventoryRepository.delete).toHaveBeenCalledWith(inventoryId);
    });

    it('should throw NotFoundException when deleting non-existent inventory item', async () => {
      const inventoryId = '1';
      mockRedisService.get.mockResolvedValue(null);
      mockInventoryRepository.findById.mockResolvedValue(null);

      await expect(service.delete(inventoryId)).rejects.toThrow(
        NotFoundException,
      );
      expect(mockInventoryRepository.findById).toHaveBeenCalledWith(
        inventoryId,
      );
      expect(mockInventoryRepository.delete).not.toHaveBeenCalled();
    });
  });
});
