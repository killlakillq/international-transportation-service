import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CalculationService } from './calculation.service';
import { Calculation } from './entities/calculation.entity';
import { CreateCalculationInput } from './dto/create-calculation.input';
import { UpdateCalculationInput } from './dto/update-calculation.input';

@Resolver(() => Calculation)
export class CalculationResolver {
  constructor(private readonly calculationService: CalculationService) {}

  @Mutation(() => Calculation)
  createCalculation(
    @Args('createCalculationInput')
    createCalculationInput: CreateCalculationInput,
  ) {
    return this.calculationService.create(createCalculationInput);
  }

  @Query(() => [Calculation], { name: 'calculation' })
  findAll() {
    return this.calculationService.findAll();
  }

  @Query(() => Calculation, { name: 'calculation' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.calculationService.findOne(id);
  }

  @Mutation(() => Calculation)
  updateCalculation(
    @Args('updateCalculationInput')
    updateCalculationInput: UpdateCalculationInput,
  ) {
    return this.calculationService.update(
      updateCalculationInput.id,
      updateCalculationInput,
    );
  }

  @Mutation(() => Calculation)
  removeCalculation(@Args('id', { type: () => Int }) id: number) {
    return this.calculationService.remove(id);
  }
}
