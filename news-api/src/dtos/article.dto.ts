import { ApiProperty } from '@nestjs/swagger';
import { SourceDTO } from './source.dto';

export class ArticleDTO {
  @ApiProperty({
    description: 'The author of the article.',
  })
  source: SourceDTO;

  @ApiProperty({
    description: 'The author of the article.',
  })
  author: string;

  @ApiProperty({
    description: 'The headline or title of the article.',
  })
  title: string;

  @ApiProperty({
    description: 'A description or snippet from the article.',
  })
  description: string;

  @ApiProperty({
    description: 'The direct URL to the article.',
  })
  url: string;

  @ApiProperty({
    description: 'The URL to a relevant image for the article.',
  })
  urlToImage: string;

  @ApiProperty({
    description:
      'The date and time that the article was published, in UTC (+000)',
  })
  publishedAt: string;

  @ApiProperty({
    description:
      'The unformatted content of the article, where available. This is truncated to 200 chars.',
    maxLength: 200,
  })
  content: string;
}
