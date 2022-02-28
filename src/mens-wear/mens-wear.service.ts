import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { mensWear } from './interface/mensWear.interface';
import { Model } from 'mongoose';
@Injectable()
export class MensWearService {
  constructor(
    @InjectModel('mensWear') private readonly mensWearSchema: Model<mensWear>,
  ) {}

  async findAll(): Promise<mensWear[]> {
    return await this.mensWearSchema.find();
  }

  async findOne(id: String): Promise<mensWear> {
    return await this.mensWearSchema.findOne({ _id: id });
  }

  async createWearable(wearable: mensWear): Promise<mensWear> {
    const newWearable = new this.mensWearSchema(wearable);
    return await newWearable.save();
  }

  async deleteWearable(id: String): Promise<mensWear> {
    return this.mensWearSchema.findByIdAndRemove(id);
  }

  async updateWearable(id: String, Wearable: mensWear): Promise<mensWear> {
    return this.mensWearSchema.findByIdAndUpdate(id, Wearable, { new: true });
  }
}
