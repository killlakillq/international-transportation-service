import { Module } from '@nestjs/common';
import { RouteService } from './route.service';
import { RouteResolver } from './route.resolver';

@Module({
  providers: [RouteResolver, RouteService],
})
export class RouteModule {}
