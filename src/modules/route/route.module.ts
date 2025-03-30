import { Module } from '@nestjs/common';
import { RouteService } from '@/modules/route/route.service';
import { RouteRepository } from '@/modules/route/route.repository';
import { RouteController } from '@/modules/route/route.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Route } from '@/modules/route/entities/route.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Route])],
  providers: [RouteService, RouteRepository],
  controllers: [RouteController],
})
export class RouteModule {}
