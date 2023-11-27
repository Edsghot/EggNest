import { Module } from '@nestjs/common';
import { TemperaturaController } from './temperatura.controller';
import { TemperaturaService } from './temperatura.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Temperatura } from 'src/Entity/Temperatura.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Temperatura])],
  controllers: [TemperaturaController],
  providers: [TemperaturaService]
})
export class TemperaturaModule {}
