import { ApiProperty } from '@nestjs/swagger';
import { ArticleDTO } from './article.dto';

export class GetEverythingResponseDTO {
  @ApiProperty({
    description: 'If the request was successful or not',
    maxLength: 2,
  })
  status: string = 'ok | error';

  @ApiProperty({
    description: 'The total number of results available for your request.',
  })
  totalResults: number;

  @ApiProperty({
    description: 'The results of the request.',
  })
  articles: Array<ArticleDTO>;

  constructor(init?: Partial<GetEverythingResponseDTO>) {
    Object.assign(this, init);
  }
}
