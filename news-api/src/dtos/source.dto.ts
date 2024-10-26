import { ApiProperty } from '@nestjs/swagger';

export class SourceDTO {
  @ApiProperty({
    description: 'The identifier id for the source this article came from.',
  })
  id: number;

  @ApiProperty({
    description: 'The identifier name for the source this article came from.',
  })
  name: string;

  constructor(init?: Partial<SourceDTO>) {
    Object.assign(this, init);
  }
}
