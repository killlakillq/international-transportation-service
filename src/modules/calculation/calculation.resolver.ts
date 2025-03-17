import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CalculationService } from '@/modules/calculation/calculation.service';
import { Calculation } from '@/modules/calculation/entities/calculation.entity';
import { CreateCalculationInput } from '@/modules/calculation/dto/create-calculation.input';
import { UpdateCalculationInput } from '@/modules/calculation/dto/update-calculation.input';

@Resolver(() => Calculation)
export class CalculationResolver {
  public constructor(private readonly calculationService: CalculationService) {}

  @Mutation(() => Calculation, { name: 'createCalculation' })
  public async create(
    @Args('createCalculationInput')
    createCalculationInput: CreateCalculationInput,
  ) {
    return this.calculationService.create(createCalculationInput);
  }

  @Query(() => [Calculation], { name: 'findCalculations' })
  public async find() {
    return this.calculationService.find();
  }

  @Query(() => Calculation, { name: 'findCalculationById' })
  public async findById(@Args('id') id: string) {
    return this.calculationService.findById(id);
  }

  @Mutation(() => Calculation, { name: 'updateCalculation' })
  public async update(
    @Args('updateCalculationInput')
    updateCalculationInput: UpdateCalculationInput,
  ) {
    return this.calculationService.update(
      updateCalculationInput.id,
      updateCalculationInput,
    );
  }

  @Mutation(() => Calculation, { name: 'deleteCalculation' })
  public async delete(@Args('id') id: string) {
    return this.calculationService.delete(id);
  }
}
