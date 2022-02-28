import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MensWearController } from './mens-wear.controller';
import { MensWearService } from './mens-wear.service';
import { mensWearSchema } from './schema/mensWear.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'mensWear', schema: mensWearSchema }]),
  ],
  controllers: [MensWearController],
  providers: [MensWearService],
})
export class MensWearModule {}
