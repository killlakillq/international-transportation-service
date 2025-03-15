import { Module, Provider } from '@nestjs/common';
import { MinioService } from '@/libs/minio/minio.service';

const minioServiceProvider: Provider = {
  provide: MinioService,
  useFactory: () => MinioService.getInstance(),
};

@Module({
  imports: [],
  providers: [minioServiceProvider],
  exports: [minioServiceProvider],
})
export class MiniioModule {}
