import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'
import { Temperatura } from '../../Entity/Temperatura.Entity'

@Module({
  imports: [TypeOrmModule.forFeature([Temperatura])],
})
export class TemperaturaModule {}
