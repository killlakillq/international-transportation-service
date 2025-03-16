import { Injectable } from '@nestjs/common';
import { CreateCalculationInput } from './dto/create-calculation.input';
import { UpdateCalculationInput } from './dto/update-calculation.input';

@Injectable()
export class CalculationService {
  create(createCalculationInput: CreateCalculationInput) {
    return 'This action adds a new calculation';
  }

  findAll() {
    return `This action returns all calculation`;
  }

  findOne(id: number) {
    return { exampleField: id };
  }

  update(id: number, updateCalculationInput: UpdateCalculationInput) {
    return `This action updates a #${id} calculation`;
  }

  remove(id: number) {
    return `This action removes a #${id} calculation`;
  }
}
