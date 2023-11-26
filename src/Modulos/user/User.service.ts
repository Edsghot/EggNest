import { Injectable } from '@nestjs/common';
import { LoginRequest } from '../../Request/User/Login.request';
import {User} from '../../Entity/User.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(
      @InjectRepository(User) private userRepository: Repository<User>
      ){}

    async loginUser(user: LoginRequest) {
        const { Email, Password } = user;
        const existingUser = await this.userRepository.findOne({
          where: { Email, Password }
        });
        
          return existingUser;
       
      }

      getAllUser(){
        return this.userRepository.find();
    }

}
