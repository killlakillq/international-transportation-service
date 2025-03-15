import config from '@/config';
import { Injectable } from '@nestjs/common';
import { Client } from 'minio';

@Injectable()
export class MinioService {
  private static instance: MinioService;
  private readonly client: Client;

  private constructor() {
    this.client = new Client({
      endPoint: config.minio.endPoint,
      port: config.minio.port,
      useSSL: config.minio.useSSL,
      accessKey: config.minio.accessKey,
      secretKey: config.minio.secretKey,
    });
  }

  public static getInstance(): MinioService {
    if (!MinioService.instance) {
      MinioService.instance = new MinioService();
    }
    return new MinioService();
  }

  public async fPutObject(
    bucketName: string,
    objectName: string,
    filePath: string,
  ) {
    return this.client.fPutObject(bucketName, objectName, filePath);
  }
}
