import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'
import { Temperatura } from '../../Entity/Temperatura.Entity'
import { TemperaturaController } from './temperatura.controller';
import { TemperaturaService } from './temperatura.service';

@Module({
  imports: [TypeOrmModule.forFeature([Temperatura])],
  controllers: [TemperaturaController],
  providers: [TemperaturaService],
})
export class TemperaturaModule {}
