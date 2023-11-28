import { Injectable } from '@nestjs/common';
import { LoginRequest } from '../../Request/User/Login.request';
import {User} from '../../Entity/User.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createUserHuevo } from 'src/Request/User/createUserHuevo.request';

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
      async createUser(user: createUserHuevo) {
        const { Nombre,Email, Password } = user;
        
        const existingUser = await this.userRepository.findOne({
          where: { Email,Nombre }
        });
        const newUser = new User();
        newUser.Nombre = Nombre;
        newUser.Email = Email;
        newUser.Password = Password;
        newUser.tipo ="usuario";

        return this.userRepository.create(newUser);
      }
    getAllUser(){
        return this.userRepository.find();
    }

}
