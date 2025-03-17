import { Module } from '@nestjs/common';
import { RouteService } from '@/modules/route/route.service';
import { RouteResolver } from '@/modules/route/route.resolver';
import { RouteRepository } from '@/modules/route/route.repository';

@Module({
  providers: [RouteResolver, RouteService, RouteRepository],
})
export class RouteModule {}
