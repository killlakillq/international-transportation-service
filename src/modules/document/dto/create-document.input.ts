import { InputType, PickType } from '@nestjs/graphql';
import { Document } from '@/modules/document/entities/document.entity';

@InputType()
export class CreateDocumentInput extends PickType(
  Document,
  ['fileName', 'fileType', 'url'] as const,
  InputType,
) {}
