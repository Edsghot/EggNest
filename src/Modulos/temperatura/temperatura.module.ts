import { Module } from '@nestjs/common';
import { TemperaturaController } from './temperatura.controller';
import { TemperaturaService } from './temperatura.service';
import { Temperatura } from 'src/Entity/Temperatura.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Temperatura])],
  controllers: [TemperaturaController],
  providers: [TemperaturaService]
})
export class TemperaturaModule {}
