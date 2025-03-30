import { BaseRepository } from '@/database/typeorm/base-repository';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Route } from '@/modules/route/entities/route.entity';
import { CreateRouteDto } from '@/modules/route/dto/create-route.dto';

@Injectable()
export class RouteRepository extends BaseRepository<Route> {
  public constructor(dataSource: DataSource) {
    super(Route, dataSource);
  }

  public async createRoute(createRouteDto: CreateRouteDto) {
    const metadata = this.create(createRouteDto);

    return this.save(metadata);
  }
}
