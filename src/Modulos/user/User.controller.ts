import { Body, Controller ,Get,Post} from '@nestjs/common';
import { UserService } from './User.service';
import { LoginRequest } from '../../Request/User/Login.request';
import { HuevoService } from '../huevo/huevo.service';

@Controller('user')
export class UserController {

    constructor(private userService: UserService,private huevoUser:HuevoService){}

    @Post('login') 
    async loginUser(@Body() loginUser: LoginRequest) {
      
      const userLogin = await this.userService.loginUser(loginUser);

      if(userLogin != null) {
        const huevos = await this.huevoUser.HuevoUser(userLogin.IdUser);
        if(huevos != null) {
          return {user: userLogin,Huevos: huevos};
        }else{
          return {msg: "usted no cuenta con huevos registrados"};
        }
        
      }else{
        return {msg: "Revise sus credenciales"}
      }
      
      return
    }

    @Get()
    getUsers(){
        return this.userService.getAllUser();
    }

}
