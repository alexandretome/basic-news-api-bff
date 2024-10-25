import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { INewsAPIConfig } from './config/newsApi.config';
import { ConfigService } from '@nestjs/config';
import { GetEverythingRequestDTO } from './dtos/getEverythingRequest.dto';

@Injectable()
export class AppProxy {
  private readonly newsApiConfig: INewsAPIConfig;
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {
    this.newsApiConfig = this.configService.get<INewsAPIConfig>('newsAPI');
    this.httpService.axiosRef.defaults.baseURL = this.newsApiConfig.url;
    this.httpService.axiosRef.defaults.headers.common['X-Api-Key'] =
      this.newsApiConfig.key;
  }

  searchAll(): Observable<AxiosResponse<GetEverythingRequestDTO[]>> {
    return this.httpService.get(this.newsApiConfig.url);
  }
}
