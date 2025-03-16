import { Module } from '@nestjs/common';
import { CalculationService } from './calculation.service';
import { CalculationResolver } from './calculation.resolver';

@Module({
  providers: [CalculationResolver, CalculationService],
})
export class CalculationModule {}
