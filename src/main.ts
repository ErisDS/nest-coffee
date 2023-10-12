import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // With this setting we drop unknown properties
      whitelist: true,
      // With this setting, it forces an error if we pass unknown properties
      // forbidNonWhitelisted: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
