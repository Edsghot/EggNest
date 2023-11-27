import { Body, Controller, Post } from '@nestjs/common';
import { TemperaturaService } from './temperatura.service';
import { createTemperaturaYhumedad } from 'src/Request/TemperaturaYhumedad/createTemperaturaYhumedad.request';

@Controller('temperatura')
export class TemperaturaController {
    
    constructor(private temperaturaService: TemperaturaService){}
    @Post('insert')
    createUser(@Body() newUser: createTemperaturaYhumedad){
        return this.temperaturaService.createUser(newUser);
    }
}
