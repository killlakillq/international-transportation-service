import { Module } from '@nestjs/common';
import { RateService } from '@/modules/rate/rate.service';
import { RateResolver } from '@/modules/rate/rate.resolver';
import { RateRepository } from '@/modules/rate/rate.repository';

@Module({
  providers: [RateResolver, RateService, RateRepository],
})
export class RateModule {}
