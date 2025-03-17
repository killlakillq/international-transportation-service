import { BaseRepository } from '@/database/typeorm/base-repository';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Route } from '@/modules/route/entities/route.entity';
import { CreateRouteInput } from '@/modules/route/dto/create-route.input';

@Injectable()
export class RouteRepository extends BaseRepository<Route> {
  public constructor(dataSource: DataSource) {
    super(Route, dataSource);
  }

  public async createRoute(createRouteInput: CreateRouteInput) {
    const metadata = this.create(createRouteInput);

    return this.save(metadata);
  }
}
