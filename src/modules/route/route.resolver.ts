import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RouteService } from './route.service';
import { Route } from './entities/route.entity';
import { CreateRouteInput } from './dto/create-route.input';
import { UpdateRouteInput } from './dto/update-route.input';

@Resolver(() => Route)
export class RouteResolver {
  constructor(private readonly routeService: RouteService) {}

  @Mutation(() => Route)
  createRoute(@Args('createRouteInput') createRouteInput: CreateRouteInput) {
    return this.routeService.create(createRouteInput);
  }

  @Query(() => [Route], { name: 'route' })
  findAll() {
    return this.routeService.findAll();
  }

  @Query(() => Route, { name: 'route' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.routeService.findOne(id);
  }

  @Mutation(() => Route)
  updateRoute(@Args('updateRouteInput') updateRouteInput: UpdateRouteInput) {
    return this.routeService.update(updateRouteInput.id, updateRouteInput);
  }

  @Mutation(() => Route)
  removeRoute(@Args('id', { type: () => Int }) id: number) {
    return this.routeService.remove(id);
  }
}
