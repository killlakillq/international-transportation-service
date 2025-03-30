import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { RouteRepository } from './route.repository';
import { EXCEPTION } from '@/common/constants/exception.constant';

@Injectable()
export class RouteService {
  public constructor(private readonly routeRepository: RouteRepository) {}

  public async create(createRouteDto: CreateRouteDto) {
    return this.routeRepository.createRoute(createRouteDto);
  }

  public async find() {
    return this.routeRepository.find();
  }

  public async findById(id: string) {
    const route = await this.routeRepository.findById(id);

    if (!route) {
      throw new NotFoundException(EXCEPTION.ROUTE.NOT_FOUND);
    }

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
