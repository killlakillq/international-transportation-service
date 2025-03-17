import config from '@/config';
import logger from '@/logger';
import { Injectable, OnModuleDestroy } from '@nestjs/common';
import * as Redis from 'redis';

@Injectable()
export class RedisService implements OnModuleDestroy {
  private static instance: RedisService;
  private readonly client: Redis.RedisClientType;

  private constructor() {
    this.client = Redis.createClient({
      url: config.redis.url,
    });

    this.client.on('error', (err) => {
      logger.error('Redis connection error:', err);
    });

    this.client.on('connect', () => {
      logger.debug('Connected to Redis');
    });
  }

  public static getInstance(): RedisService {
    if (!RedisService.instance) {
      RedisService.instance = new RedisService();
    }
    return new RedisService();
  }

  public getClient(): Redis.RedisClientType {
    return this.client;
  }

  public async set(key: string, value: string) {
    const client = this.getClient();

    return client.set(key, value);
  }

  public async get(key: string) {
    const client = this.getClient();

    return client.get(key);
  }

  public async onModuleDestroy() {
    await this.client.quit();
  }
}
