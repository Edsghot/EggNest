import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Incubadora } from 'src/Entity/Incubadora.entity';
import { createTemperaturaYhumedad } from 'src/Request/TemperaturaYhumedad/createTemperaturaYhumedad.request';
import { Repository } from 'typeorm';

@Injectable()
export class IncubadoraService {

    
    constructor(@InjectRepository(Incubadora) private incubadoraRepository: Repository<Incubadora>
        ){}


    async updateIncubadora(incubadora: createTemperaturaYhumedad){
        const { ventilador1, foco, idIncubadora } = incubadora;

        var existingIncubadora = await this.incubadoraRepository.findOne({
            where: { IdIncubadora: idIncubadora }
        });

        var antigua = existingIncubadora;
    
        if (existingIncubadora) {
    
            existingIncubadora.Ventilador1 = ventilador1;
            existingIncubadora.foco = foco;
    
            await this.incubadoraRepository.save(existingIncubadora);

            console.log(antigua);
            return antigua;
        } else {
            return {msg: "Incubadora not found for id: " + idIncubadora}
        }
    }
     getUltimo(id: number){
        
        var existingIncubadora = this.incubadoraRepository.findOne({
            where: { IdIncubadora: id }
        });

        return existingIncubadora;    
    }
}
