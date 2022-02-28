import { Injectable, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MensWearModule } from './mens-wear/mens-wear.module';
import keys from './mens-wear/config/keys';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(keys.mongoURI),
    MensWearModule,
  ],
})
export class AppModule {}
