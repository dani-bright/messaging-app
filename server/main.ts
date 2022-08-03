import { json } from 'body-parser';
import * as moment from 'moment-timezone';

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './AppModule';

moment.tz.setDefault('Europe/Paris');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(json({ limit: '20mb' }));
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );


  await app.listen(5000);

  console.log('app listening on port 5000');

}
bootstrap();
