import { Body, Controller ,Get,Post} from '@nestjs/common';
import { UserService } from './user.service';
import { loginUsers } from './dto/LoginUsers.dto';

@Controller('user')
export class UserController {

    constructor(private userService: UserService){}

    @Post('login') 
    async loginUser(@Body() loginUser: loginUsers) {
      return await this.userService.loginUser(loginUser);
    }

    @Get()
    getUsers(){
        return this.userService.getAllUser();
    }

}
