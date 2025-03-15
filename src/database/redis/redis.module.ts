import { Module, Provider } from '@nestjs/common';
import { RedisService } from '@/database/redis/redis.service';

const redisServiceProvider: Provider = {
  provide: RedisService,
  useFactory: () => RedisService.getInstance(),
};

@Module({
  imports: [],
  providers: [redisServiceProvider],
  exports: [redisServiceProvider],
})
export class RedisModule {}
