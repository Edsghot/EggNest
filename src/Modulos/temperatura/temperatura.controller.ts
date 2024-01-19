import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { TemperaturaService } from './temperatura.service';
import { createTemperaturaYhumedad } from 'src/Request/TemperaturaYhumedad/createTemperaturaYhumedad.request';
import { IncubadoraService } from '../incubadora/incubadora.service';

@Controller('temperatura')
export class TemperaturaController {
    
    constructor(private temperaturaService: TemperaturaService, private incubadoraService: IncubadoraService){}
    
    @Get('insert')
    async createTemperatura(@Query() newData: createTemperaturaYhumedad){
        if(newData== null){
            return {msg: "error no se esta enviando datos"}
        }
        else{
            const data = await this.incubadoraService.getByEstadosVentiladorFoco(newData.idIncubadora); 
            await this.temperaturaService.creatTemperatura(newData); 

            return data;
        }
    }

    @Get("temperaturaActual")
    getTemperatura(){
        return this.temperaturaService.getTemperaturaActual();
    }

    @Get("reporteTemperatura/:cantidad")
    async getReporteTemperaturas(@Param('cantidad') cantidad: number) {
      return await this.temperaturaService.getReporteTemperatura(cantidad);
    }

    @Get("reporteHumedad/:cantidad")
    async getReporteHumedad(@Param('cantidad') cantidad: number) {
      return await this.temperaturaService.getReporteHumedad(cantidad);
    }
}
