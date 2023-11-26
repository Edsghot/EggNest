import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'
import { Incubadora } from '../../Entity/Incubadora.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Incubadora])],
})
export class IncubadoraModule {}
