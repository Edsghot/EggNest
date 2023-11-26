import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import {TypeOrmModule} from '@nestjs/typeorm'
import { User } from '../../Entity/User.entity';
import { Huevo } from 'src/Entity/Huevo.entity';
import { HuevoService } from '../huevo/huevo.service';
@Module({
  imports: [TypeOrmModule.forFeature([User]),TypeOrmModule.forFeature([Huevo])],
  controllers: [UserController],
  providers: [UserService,HuevoService]
})
export class UserModule {}
