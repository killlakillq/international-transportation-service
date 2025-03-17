import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCalculationInput } from '@/modules/calculation/dto/create-calculation.input';
import { UpdateCalculationInput } from '@/modules/calculation/dto/update-calculation.input';
import { CalculationRepository } from '@/modules/calculation/calculation.repository';
import { EXCEPTION } from '@/common/constants/exception.constant';

@Injectable()
export class CalculationService {
  public constructor(
    private readonly calculationRepository: CalculationRepository,
  ) {}

  public async create(createCalculationInput: CreateCalculationInput) {
    return this.calculationRepository.createCalculation(createCalculationInput);
  }

  public async find() {
    return this.calculationRepository.find();
  }

  public async findById(id: string) {
    const calculation = await this.calculationRepository.findById(id);

    if (!calculation) {
      throw new NotFoundException(EXCEPTION.DOCUMENT.NOT_FOUND);
    }

    return calculation;
  }

  public async update(
    id: string,
    updateCalculationInput: UpdateCalculationInput,
  ) {
    const calculation = await this.findById(id);

    return this.calculationRepository.update(
      calculation.id,
      updateCalculationInput,
    );
  }

  public async delete(id: string) {
    const calculation = await this.findById(id);

    return this.calculationRepository.delete(calculation.id);
  }
}
