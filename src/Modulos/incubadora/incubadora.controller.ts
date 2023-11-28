import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { IncubadoraService } from './incubadora.service';
import { actualizarVentiladorFoco } from 'src/Request/Incubador/actualizarVentiladorFocoRequest';

@Controller('incubadora')
export class IncubadoraController {
    constructor(private incubadoraService: IncubadoraService){}

    @Post('actualizarVentilador')
    async PostActualizarVentilador(@Body() data:actualizarVentiladorFoco ){
        return await this.incubadoraService.updateVentilador(data.valor,data.idIncubadora);
    }

    @Post('actualizarFoco')
    async PostActualizarFoco(@Body() data:actualizarVentiladorFoco ){
        return await this.incubadoraService.updateFoco(data.valor,data.idIncubadora);
    }

    @Get('getByIdIncubadora')
    async GetbyIdincubadora(@Query() idUser:number){
        return await this.incubadoraService.getByIdIncubadora(idUser);
    }

}
