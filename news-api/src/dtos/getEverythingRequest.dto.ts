import { ApiProperty } from '@nestjs/swagger';

export class GetEverythingRequestDTO {
  @ApiProperty({
    description:
      'The 2-letter ISO 3166-1 code of the country you want to get articles for',
    maxLength: 2,
  })
  country: string;

  @ApiProperty({
    description: 'The category you want to get articles for. Possible options',
    maxLength: 50,
  })
  category: string;

  @ApiProperty({
    description:
      'Keywords or phrases to search for in the article title and body',
    maxLength: 500,
  })
  query: string;

  @ApiProperty({
    description:
      'A comma-seperated string of identifiers (maximum 20) for the news sources or blogs you want headlines from.',
    maxLength: 500,
  })
  sources: string;

  @ApiProperty({
    description:
      'The number of results to return per page (request). 20 is the default, 100 is the maximum.',
    default: 20,
    maximum: 100,
  })
  pageSize: number;

  @ApiProperty({
    description:
      'Use this to page through the results if the total results found is greater than the page size.',
    default: 0,
    minimum: 0,
  })
  page: number;

  constructor(partial: Partial<GetEverythingRequestDTO>) {
    Object.assign(this, partial);
  }
}
