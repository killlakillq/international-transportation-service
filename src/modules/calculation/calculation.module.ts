import { Module } from '@nestjs/common';
import { CalculationService } from '@/modules/calculation/calculation.service';
import { CalculationResolver } from '@/modules/calculation/calculation.resolver';
import { CalculationRepository } from '@/modules/calculation/calculation.repository';

@Module({
  providers: [CalculationResolver, CalculationService, CalculationRepository],
})
export class CalculationModule {}
