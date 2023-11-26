import { Module } from '@nestjs/common';
import { HuevoController } from './huevo.controller';
import { HuevoService } from './huevo.service';
import {TypeOrmModule} from '@nestjs/typeorm'
import { Huevo } from '../../Entity/Huevo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Huevo])],
  controllers: [HuevoController],
  providers: [HuevoService]
})
export class HuevoModule {}