import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRouteInput } from './dto/create-route.input';
import { UpdateRouteInput } from './dto/update-route.input';
import { RouteRepository } from './route.repository';
import { EXCEPTION } from '@/common/constants/exception.constant';

@Injectable()
export class RouteService {
  public constructor(private readonly routeRepository: RouteRepository) {}

  public async create(createRouteInput: CreateRouteInput) {
    return this.routeRepository.createRoute(createRouteInput);
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

  public async update(id: string, updateRouteInput: UpdateRouteInput) {
    const route = await this.findById(id);

    return this.routeRepository.update(route.id, updateRouteInput);
  }

  public async delete(id: string) {
    const route = await this.findById(id);

    return this.routeRepository.delete(route.id);
  }
}
