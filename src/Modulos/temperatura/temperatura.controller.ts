import { Body, Controller, Get, Post } from '@nestjs/common';
import { TemperaturaService } from './temperatura.service';
import { createTemperaturaYhumedad } from 'src/Request/TemperaturaYhumedad/createTemperaturaYhumedad.request';

@Controller('temperatura')
export class TemperaturaController {
    
    constructor(private temperaturaService: TemperaturaService){}
    @Post('insert')
    createUser(@Body() newUser: createTemperaturaYhumedad){
        return this.temperaturaService.createUser(newUser);
    }

    @Get("temperaturaActual")
    getUsers(){
        return this.temperaturaService.getTemperaturaActual();
    }
}
