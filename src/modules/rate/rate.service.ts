import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRateInput } from './dto/create-rate.input';
import { UpdateRateInput } from './dto/update-rate.input';
import { RateRepository } from './rate.repository';
import { EXCEPTION } from '@/common/constants/exception.constant';

@Injectable()
export class RateService {
  public constructor(private readonly rateRepository: RateRepository) {}

  public async create(createRateInput: CreateRateInput) {
    return this.rateRepository.createRate(createRateInput);
  }

  public async find() {
    return this.rateRepository.find();
  }

  public async findById(id: string) {
    const rate = await this.rateRepository.findById(id);

    if (!rate) {
      throw new NotFoundException(EXCEPTION.RATE.NOT_FOUND);
    }

    return rate;
  }

  public async update(id: string, updateRateInput: UpdateRateInput) {
    const rate = await this.findById(id);

    return this.rateRepository.update(rate.id, updateRateInput);
  }

  public async delete(id: string) {
    const rate = await this.findById(id);

    return this.rateRepository.delete(rate.id);
  }
}
