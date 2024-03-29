import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createTemperaturaYhumedad } from '../../Request/TemperaturaYhumedad/createTemperaturaYhumedad.request';
import { Repository } from 'typeorm';
import { Temperatura } from 'src/Entity/TempHumedad.entity';

@Injectable()
export class TemperaturaService {
    constructor(@InjectRepository(Temperatura) private temperaturaRepository: Repository<Temperatura>){}

    creatTemperatura(newTemperatura: createTemperaturaYhumedad){
        var dto = new Temperatura();
        const {valorTemperatura,valorHumedad} = newTemperatura;
        dto.IdIncubadora = 1;
        dto.valorTemperatura = valorTemperatura;
        dto.valorHumedad = valorHumedad;

        const newTemperatur = this.temperaturaRepository.create(dto);
        return this.temperaturaRepository.save(newTemperatur);
    }

    getTemperaturaActual(){
        const ultimaTemperatura = this.temperaturaRepository
      .createQueryBuilder('temperatura')
      .orderBy('temperatura.fecha', 'DESC')
      .limit(1)
      .getOne();

        return ultimaTemperatura;
    }

    async getReporteTemperatura(cantidad: number) {
        if (isNaN(cantidad) || cantidad <= 0) {
          throw new Error('La cantidad debe ser un número mayor que cero.');
        }
      
        const ultimasTemperaturas = await this.temperaturaRepository
          .createQueryBuilder('Temperatura')
          .select(['Temperatura.valorTemperatura', 'valorTemperatura']) 
          .orderBy('Temperatura.fecha', 'DESC')
          .limit(cantidad)
          .getMany();

          const valoresTemperatura = ultimasTemperaturas.map((temperatura) => temperatura.valorTemperatura);
          const valoresInvertidos = valoresTemperatura.reverse();

          return valoresInvertidos;
      }
      
      async getReporteHumedad(cantidad: number) {
        if (isNaN(cantidad) || cantidad <= 0) {
          throw new Error('La cantidad debe ser un número mayor que cero.');
        }
      
        const ultimasHumedad = await this.temperaturaRepository
          .createQueryBuilder('Temperatura')
          .select(['Temperatura.valorHumedad', 'valorHumedad']) 
          .orderBy('Temperatura.fecha', 'DESC')
          .limit(cantidad)
          .getMany();

          const valoressHumedad = ultimasHumedad.map((temperatura) => temperatura.valorHumedad);

          const valoresHumedad = valoressHumedad.reverse();

          return valoresHumedad;
      }
      

}
