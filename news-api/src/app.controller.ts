import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { GetEverythingRequestDTO } from './dtos/getEverythingRequest.dto';
import { GetEverythingResponseDTO } from './dtos/getEverythingResponse.dto';

@Controller('articles')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('search')
  async postSearch(
    @Body() getEverythingRequestDTO: GetEverythingRequestDTO,
  ): Promise<GetEverythingResponseDTO> {
    return this.appService.getSearch(getEverythingRequestDTO);
  }
}
