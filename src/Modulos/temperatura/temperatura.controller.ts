import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { TemperaturaService } from './temperatura.service';
import { createTemperaturaYhumedad } from 'src/Request/TemperaturaYhumedad/createTemperaturaYhumedad.request';
import { IncubadoraService } from '../incubadora/incubadora.service';

@Controller('temperatura')
export class TemperaturaController {
    
    constructor(private temperaturaService: TemperaturaService, private incubadoraService: IncubadoraService){}
    @Get('insert')
    async createUser(@Query() newData: createTemperaturaYhumedad){
        if(newData== null){
            return {msg: "error no se esta enviando datos"}
        }
        else{
            const data = await this.incubadoraService.getUltimo(newData.idIncubadora);
            await this.incubadoraService.updateIncubadora(newData)
            this.temperaturaService.createUser(newData);
            
            var venti1;
            var foco;

            if(data.Ventilador1 ==="HIGH"){
                venti1 = 1;
            }else{
                venti1 = 0;
            }

            if(data.foco === "HIGH"){
                foco = 1;
            }else{
                foco = 0;
            }


            return {ventilador1: ">"+venti1,foco: ">"+foco }
        }
    }

    @Get("temperaturaActual")
    getTemperatura(){
        return this.temperaturaService.getTemperaturaActual();
    }
}
