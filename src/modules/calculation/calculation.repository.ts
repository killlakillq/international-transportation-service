import { BaseRepository } from '@/database/typeorm/base-repository';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Calculation } from '@/modules/calculation/entities/calculation.entity';
import { CreateCalculationInput } from '@/modules/calculation/dto/create-calculation.input';

@Injectable()
export class CalculationRepository extends BaseRepository<Calculation> {
  public constructor(dataSource: DataSource) {
    super(Calculation, dataSource);
  }

  public async createCalculation(
    createCalculationInput: CreateCalculationInput,
  ) {
    const metadata = this.create(createCalculationInput);

    return this.save(metadata);
  }
}
