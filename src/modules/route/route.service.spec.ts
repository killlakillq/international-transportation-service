import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { RouteService } from './route.service';
import { RouteRepository } from './route.repository';
import { RedisService } from '@/database/redis/redis.service';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';

describe('RouteService', () => {
  let service: RouteService;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let repository: RouteRepository;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let redisService: RedisService;

  const mockRouteRepository = {
    createRoute: jest.fn(),
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
        RouteService,
        {
          provide: RouteRepository,
          useValue: mockRouteRepository,
        },
        {
          provide: RedisService,
          useValue: mockRedisService,
        },
      ],
    }).compile();

    service = module.get<RouteService>(RouteService);
    repository = module.get<RouteRepository>(RouteRepository);
    redisService = module.get<RedisService>(RedisService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('create', () => {
    it('should create a route successfully', async () => {
      const createRouteDto: CreateRouteDto = {
        from: 'New York',
        to: 'Los Angeles',
        distance: '3000 miles',
        price: 100,
        estimatedTime: '10 hours',
      };
      const expectedRoute = { id: '1', ...createRouteDto };
      mockRouteRepository.createRoute.mockResolvedValue(expectedRoute);

      const result = await service.create(createRouteDto);

      expect(result).toEqual(expectedRoute);
      expect(mockRouteRepository.createRoute).toHaveBeenCalledWith(
        createRouteDto,
      );
    });
  });

  describe('find', () => {
    it('should return all routes', async () => {
      const expectedRoutes = [
        { id: '1', startLocation: 'New York', endLocation: 'Los Angeles' },
        { id: '2', startLocation: 'Chicago', endLocation: 'Miami' },
      ];
      mockRouteRepository.find.mockResolvedValue(expectedRoutes);

      const result = await service.find();

      expect(result).toEqual(expectedRoutes);
      expect(mockRouteRepository.find).toHaveBeenCalled();
    });
  });

  describe('findById', () => {
    it('should return a route from cache when available', async () => {
      const routeId = '1';
      const cachedRoute = {
        id: routeId,
        startLocation: 'New York',
        endLocation: 'Los Angeles',
      };
      mockRedisService.get.mockResolvedValue(JSON.stringify(cachedRoute));

      const result = await service.findById(routeId);

      expect(result).toEqual(cachedRoute);
      expect(mockRedisService.get).toHaveBeenCalledWith(`route:${routeId}`);
      expect(mockRouteRepository.findById).not.toHaveBeenCalled();
    });

    it('should fetch and cache route from repository when not in cache', async () => {
      const routeId = '1';
      const route = {
        id: routeId,
        startLocation: 'New York',
        endLocation: 'Los Angeles',
      };
      mockRedisService.get.mockResolvedValue(null);
      mockRouteRepository.findById.mockResolvedValue(route);

      const result = await service.findById(routeId);

      expect(result).toEqual(route);
      expect(mockRedisService.get).toHaveBeenCalledWith(`route:${routeId}`);
      expect(mockRouteRepository.findById).toHaveBeenCalledWith(routeId);
      expect(mockRedisService.set).toHaveBeenCalledWith(
        `route:${routeId}`,
        JSON.stringify(route),
        60 * 60 * 24,
      );
    });

    it('should throw NotFoundException when route does not exist', async () => {
      const routeId = '1';
      mockRedisService.get.mockResolvedValue(null);
      mockRouteRepository.findById.mockResolvedValue(null);

      await expect(service.findById(routeId)).rejects.toThrow(
        NotFoundException,
      );
      expect(mockRedisService.get).toHaveBeenCalledWith(`route:${routeId}`);
      expect(mockRouteRepository.findById).toHaveBeenCalledWith(routeId);
      expect(mockRedisService.set).not.toHaveBeenCalled();
    });
  });

  describe('update', () => {
    it('should update a route successfully', async () => {
      const routeId = '1';
      const updateRouteDto: UpdateRouteDto = {
        distance: '3500 miles',
      };
      const existingRoute = {
        id: routeId,
        startLocation: 'New York',
        endLocation: 'Los Angeles',
        distance: '3000 miles',
      };
      const updatedRoute = { ...existingRoute, ...updateRouteDto };

      mockRedisService.get.mockResolvedValue(null);
      mockRouteRepository.findById.mockResolvedValue(existingRoute);
      mockRouteRepository.update.mockResolvedValue(updatedRoute);

      const result = await service.update(routeId, updateRouteDto);

      expect(result).toEqual(updatedRoute);
      expect(mockRouteRepository.findById).toHaveBeenCalledWith(routeId);
      expect(mockRouteRepository.update).toHaveBeenCalledWith(
        routeId,
        updateRouteDto,
      );
    });

    it('should throw NotFoundException when updating non-existent route', async () => {
      const routeId = '1';
      const updateRouteDto: UpdateRouteDto = {
        distance: '3500 miles',
      };
      mockRedisService.get.mockResolvedValue(null);
      mockRouteRepository.findById.mockResolvedValue(null);

      await expect(service.update(routeId, updateRouteDto)).rejects.toThrow(
        NotFoundException,
      );
      expect(mockRouteRepository.findById).toHaveBeenCalledWith(routeId);
      expect(mockRouteRepository.update).not.toHaveBeenCalled();
    });
  });

  describe('delete', () => {
    it('should delete a route successfully', async () => {
      const routeId = '1';
      const existingRoute = {
        id: routeId,
        startLocation: 'New York',
        endLocation: 'Los Angeles',
      };
      mockRedisService.get.mockResolvedValue(null);
      mockRouteRepository.findById.mockResolvedValue(existingRoute);
      mockRouteRepository.delete.mockResolvedValue({
        id: routeId,
        deleted: true,
      });

      const result = await service.delete(routeId);

      expect(result).toEqual({ id: routeId, deleted: true });
      expect(mockRouteRepository.findById).toHaveBeenCalledWith(routeId);
      expect(mockRouteRepository.delete).toHaveBeenCalledWith(routeId);
    });

    it('should throw NotFoundException when deleting non-existent route', async () => {
      const routeId = '1';
      mockRedisService.get.mockResolvedValue(null);
      mockRouteRepository.findById.mockResolvedValue(null);

      await expect(service.delete(routeId)).rejects.toThrow(NotFoundException);
      expect(mockRouteRepository.findById).toHaveBeenCalledWith(routeId);
      expect(mockRouteRepository.delete).not.toHaveBeenCalled();
    });
  });
});
