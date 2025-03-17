import { BaseRepository } from '@/database/typeorm/base-repository';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Rate } from '@/modules/rate/entities/rate.entity';
import { CreateRateInput } from '@/modules/rate/dto/create-rate.input';

@Injectable()
export class RateRepository extends BaseRepository<Rate> {
  public constructor(dataSource: DataSource) {
    super(Rate, dataSource);
  }

  public async createRate(createRateInput: CreateRateInput) {
    const metadata = this.create(createRateInput);

    return this.save(metadata);
  }
}
