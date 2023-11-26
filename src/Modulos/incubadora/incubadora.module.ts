import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'
import { Incubadora } from '../../Entity/Incubadora.entity'
import { IncubadoraController } from './incubadora.controller';
import { IncubadoraService } from './incubadora.service';

@Module({
  imports: [TypeOrmModule.forFeature([Incubadora])],
  controllers: [IncubadoraController],
  providers: [IncubadoraService],
})
export class IncubadoraModule {}
