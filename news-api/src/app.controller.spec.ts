import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GetEverythingRequestDTO } from './dtos/getEverythingRequest.dto';
import { GetEverythingResponseDTO } from './dtos/getEverythingResponse.dto';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      const result: GetEverythingResponseDTO = new GetEverythingResponseDTO();
      expect(
        appController.postSearch(new GetEverythingRequestDTO()),
      ).toEqual<GetEverythingResponseDTO>(result);
    });
  });
});
