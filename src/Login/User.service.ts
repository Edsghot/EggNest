import { Injectable } from '@nestjs/common';
import { loginUsers } from './dto/LoginUsers.dto';
import {User} from '../Entity/User.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>){}

    async loginUser(user: loginUsers) {
        const { Email, Password } = user;
      
        const existingUser = await this.userRepository.findOne({
          where: { Email, Password }
        });
      
        if (existingUser) {
          return existingUser;
        } else {
          return { msg: "credenciales invalidas" };
        }
      }

      getAllUser(){
        return this.userRepository.find();
    }

}
