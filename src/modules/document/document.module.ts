import { Module } from '@nestjs/common';
import { DocumentService } from '@/modules/document/document.service';
import { DocumentResolver } from '@/modules/document/document.resolver';
import { DocumentRepository } from '@/modules/document/document.repository';

@Module({
  providers: [DocumentResolver, DocumentService, DocumentRepository],
})
export class DocumentModule {}
