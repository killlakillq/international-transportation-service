import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { RouteRepository } from './route.repository';
import { EXCEPTION } from '@/common/constants/exception.constant';
import { RedisService } from '@/database/redis/redis.service';
import { Route } from './entities/route.entity';

@Injectable()
export class RouteService {
  public constructor(
    private readonly routeRepository: RouteRepository,
    private readonly redisService: RedisService,
  ) {}

  public async create(createRouteDto: CreateRouteDto) {
    return this.routeRepository.createRoute(createRouteDto);
  }

  public async find() {
    return this.routeRepository.find();
  }

  public async findById(id: string) {
    const cachedRoute = await this.redisService.get(`route:${id}`);

    if (cachedRoute) {
      return JSON.parse(cachedRoute) as Route;
    }

    const route = await this.routeRepository.findById(id);

    if (!route) {
      throw new NotFoundException(EXCEPTION.ROUTE.NOT_FOUND);
    }

    await this.redisService.set(
      `route:${route.id}`,
      JSON.stringify(route),
      60 * 60 * 24,
    );

    return route;
  }

  public async update(id: string, updateRouteDto: UpdateRouteDto) {
    const route = await this.findById(id);

    return this.routeRepository.update(route.id, updateRouteDto);
  }

  public async delete(id: string) {
    const route = await this.findById(id);

    return this.routeRepository.delete(route.id);
  }
}
