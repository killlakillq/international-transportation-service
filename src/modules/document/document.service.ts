import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDocumentInput } from '@/modules/document/dto/create-document.input';
import { UpdateDocumentInput } from '@/modules/document/dto/update-document.input';
import { DocumentRepository } from '@/modules/document/document.repository';
import { EXCEPTION } from '@/common/constants/exception.constant';

@Injectable()
export class DocumentService {
  public constructor(private readonly documentRepository: DocumentRepository) {}

  public async create(createDocumentInput: CreateDocumentInput) {
    return this.documentRepository.createDocument(createDocumentInput);
  }

  public async find() {
    return this.documentRepository.find();
  }

  public async findById(id: string) {
    const document = await this.documentRepository.findById(id);

    if (!document) {
      throw new NotFoundException(EXCEPTION.DOCUMENT.NOT_FOUND);
    }

    return document;
  }

  public async update(id: string, updateDocumentInput: UpdateDocumentInput) {
    const document = await this.findById(id);

    return this.documentRepository.update(document.id, updateDocumentInput);
  }

  public async delete(id: string) {
    const document = await this.findById(id);

    return this.documentRepository.delete(document.id);
  }
}
