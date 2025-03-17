import { BaseRepository } from '@/database/typeorm/base-repository';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Document } from '@/modules/document/entities/document.entity';
import { CreateDocumentInput } from '@/modules/document/dto/create-document.input';

@Injectable()
export class DocumentRepository extends BaseRepository<Document> {
  public constructor(dataSource: DataSource) {
    super(Document, dataSource);
  }

  public async createDocument(createDocumentInput: CreateDocumentInput) {
    const metadata = this.create(createDocumentInput);

    return this.save(metadata);
  }
}
