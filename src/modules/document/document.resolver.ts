import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { DocumentService } from '@/modules/document/document.service';
import { Document } from '@/modules/document/entities/document.entity';
import { CreateDocumentInput } from '@/modules/document/dto/create-document.input';
import { UpdateDocumentInput } from '@/modules/document/dto/update-document.input';

@Resolver(() => Document)
export class DocumentResolver {
  public constructor(private readonly documentService: DocumentService) {}

  @Mutation(() => Document, { name: 'createDocument' })
  public async create(
    @Args('createDocumentInput') createDocumentInput: CreateDocumentInput,
  ) {
    return this.documentService.create(createDocumentInput);
  }

  @Query(() => [Document], { name: 'findDocuments' })
  public async find() {
    return this.documentService.find();
  }

  @Query(() => Document, { name: 'findDocumentById' })
  public async findById(@Args('id') id: string) {
    return this.documentService.findById(id);
  }

  @Mutation(() => Document, { name: 'updateDocument' })
  public async update(
    @Args('updateDocumentInput') updateDocumentInput: UpdateDocumentInput,
  ) {
    return this.documentService.update(
      updateDocumentInput.id,
      updateDocumentInput,
    );
  }

  @Mutation(() => Document, { name: 'deleteDocument' })
  public async delete(@Args('id') id: string) {
    return this.documentService.delete(id);
  }
}
