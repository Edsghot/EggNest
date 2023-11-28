import { Module } from '@nestjs/common';
import { TemperaturaController } from './temperatura.controller';
import { TemperaturaService } from './temperatura.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Temperatura } from 'src/Entity/TempHumedad.entity';
import { IncubadoraService } from '../incubadora/incubadora.service';
import { Incubadora } from 'src/Entity/Incubadora.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Temperatura]),TypeOrmModule.forFeature([Incubadora])],
  controllers: [TemperaturaController],
  providers: [TemperaturaService,IncubadoraService]
})
export class TemperaturaModule {}
