import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { RateService } from '@/modules/rate/rate.service';
import { Rate } from '@/modules/rate/entities/rate.entity';
import { CreateRateInput } from '@/modules/rate/dto/create-rate.input';
import { UpdateRateInput } from '@/modules/rate/dto/update-rate.input';

@Resolver(() => Rate)
export class RateResolver {
  public constructor(private readonly rateService: RateService) {}

  @Mutation(() => Rate, { name: 'createRate' })
  public async create(
    @Args('createRateInput') createRateInput: CreateRateInput,
  ) {
    return this.rateService.create(createRateInput);
  }

  @Query(() => [Rate], { name: 'findRates' })
  public async find() {
    return this.rateService.find();
  }

  @Query(() => Rate, { name: 'findRateById' })
  public async findById(@Args('id') id: string) {
    return this.rateService.findById(id);
  }

  @Mutation(() => Rate, { name: 'updateRate' })
  public async update(
    @Args('updateRateInput') updateRateInput: UpdateRateInput,
  ) {
    return this.rateService.update(updateRateInput.id, updateRateInput);
  }

  @Mutation(() => Rate, { name: 'deleteRate' })
  public async delete(@Args('id') id: string) {
    return this.rateService.delete(id);
  }
}
