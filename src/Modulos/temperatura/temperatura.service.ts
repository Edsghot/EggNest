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
}
