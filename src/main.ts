import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { IServiceInfoConfig } from './config/service.config';
import { INestApplication } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const serviceInfo = configService.get<IServiceInfoConfig>('service');
  const document = setupOpenApiDocument(app, serviceInfo);
  SwaggerModule.setup(serviceInfo.apiDoc, app, document);
  await app.listen(serviceInfo.port);
}

bootstrap();

/**
 *
 * @param app: INestApplication
 * @param serviceInfo: IServiceInfoConfig
 * @returns document: OpenAPIObject
 */
function setupOpenApiDocument(
  app: INestApplication<any>,
  serviceInfo: IServiceInfoConfig,
): OpenAPIObject {
  const config = new DocumentBuilder()
    .setTitle(serviceInfo.title)
    .setDescription(serviceInfo.description)
    .setVersion(serviceInfo.version)
    .addTag(serviceInfo.tag)
    .build();
  return SwaggerModule.createDocument(app, config);
}
