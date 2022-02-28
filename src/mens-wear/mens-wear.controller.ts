import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { mensWear } from './interface/mensWear.interface';
import { MensWearService } from './mens-wear.service';

@Controller('mens')
export class MensWearController {
  constructor(private readonly mensWearService: MensWearService) {}

  @Get('')
  findAll(): Promise<mensWear[]> {
    return this.mensWearService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<mensWear> {
    return this.mensWearService.findOne(id);
  }

  @Post('upload')
  createWearable(@Body() wearable: mensWear): Promise<mensWear> {
    return this.mensWearService.createWearable(wearable);
  }

  @Delete(':id')
  deleteWearable(@Param('id') id): Promise<mensWear> {
    return this.mensWearService.deleteWearable(id);
  }

  @Put(':id')
  updateWearable(
    @Body() wearable: mensWear,
    @Param('id') id,
  ): Promise<mensWear> {
    return this.mensWearService.updateWearable(id, wearable);
  }
}
