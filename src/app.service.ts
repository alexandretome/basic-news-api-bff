import { Injectable } from '@nestjs/common';
import { GetEverythingRequestDTO } from './dtos/getEverythingRequest.dto';
import { GetEverythingResponseDTO } from './dtos/getEverythingResponse.dto';

@Injectable()
export class AppService {
  getSearch(
    getEverythingRequestDTO: GetEverythingRequestDTO,
  ): GetEverythingResponseDTO {
    if (getEverythingRequestDTO) {
      return {
        status: 'success',
        totalResults: 1,
        articles: [
          {
            source: {
              id: 1,
              name: 'name',
            },
            author: 'author',
            title: 'title',
            description: 'description',
            url: 'url',
            urlToImage: 'urlToImage',
            publishedAt: 'publishedAt',
            content: 'content',
          },
        ],
      };
    }
    return null;
  }
}
