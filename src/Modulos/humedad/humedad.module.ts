import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'
import { Humedad } from '../../Entity/Humedad.entity'
import { HumedadController } from './humedad.controller';
import { HumedadService } from './humedad.service';

@Module({
  imports: [TypeOrmModule.forFeature([Humedad])],
  controllers: [HumedadController],
  providers: [HumedadService],

})
export class HumedadModule {}

