import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'
import { Humedad } from '../../Entity/Humedad.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Humedad])],

})
export class HumedadModule {}

