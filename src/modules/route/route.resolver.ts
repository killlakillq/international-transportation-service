import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { RouteService } from '@/modules/route/route.service';
import { Route } from '@/modules/route/entities/route.entity';
import { CreateRouteInput } from '@/modules/route/dto/create-route.input';
import { UpdateRouteInput } from '@/modules/route/dto/update-route.input';

@Resolver(() => Route)
export class RouteResolver {
  public constructor(private readonly routeService: RouteService) {}

  @Mutation(() => Route, { name: 'createRoute' })
  public async create(
    @Args('createRouteInput') createRouteInput: CreateRouteInput,
  ) {
    return this.routeService.create(createRouteInput);
  }

  @Query(() => [Route], { name: 'findRoutes' })
  public async find() {
    return this.routeService.find();
  }

  @Query(() => Route, { name: 'findRouteById' })
  public async findById(@Args('id') id: string) {
    return this.routeService.findById(id);
  }

  @Mutation(() => Route, { name: 'updateRoute' })
  public async update(
    @Args('updateRouteInput') updateRouteInput: UpdateRouteInput,
  ) {
    return this.routeService.update(updateRouteInput.id, updateRouteInput);
  }

  @Mutation(() => Route, { name: 'deleteRoute' })
  public async delete(@Args('id') id: string) {
    return this.routeService.delete(id);
  }
}
