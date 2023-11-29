import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Incubadora } from 'src/Entity/Incubadora.entity';
import { createTemperaturaYhumedad } from 'src/Request/TemperaturaYhumedad/createTemperaturaYhumedad.request';
import { Repository } from 'typeorm';

@Injectable()
export class IncubadoraService {

    
    constructor(@InjectRepository(Incubadora) private incubadoraRepository: Repository<Incubadora>
        ){}

        async updateVentilador(valor:string,idIncubadora: number ){
            const existing = await this.incubadoraRepository.findOne({
                where: { IdIncubadora: idIncubadora },
            });

            existing.Ventilador1 = valor;
            
            return await this.incubadoraRepository.save(existing);  
        }
        
        async updateFoco(valor:string,idIncubadora: number ){
            const existing = await this.incubadoraRepository.findOne({
                where: { IdIncubadora: idIncubadora },
            });

            existing.foco = valor;
            
            return await this.incubadoraRepository.save(existing);  
        }

    
     getUltimo(id: number){
        
        var existingIncubadora = this.incubadoraRepository.findOne({
            where: { IdIncubadora: id }
        });

        return existingIncubadora;    
    }

    async getByIdIncubadora(idUser: number){
        
        var existingIncubadora = await this.incubadoraRepository.findOne({
            where: { IdUser: idUser }
        });

        return existingIncubadora;    
    }

    async getByEstadosVentiladorFoco(idIncubadora: number){
        
        var existingIncubadora = await this.incubadoraRepository.findOne({
            where: { IdIncubadora: idIncubadora }
        });

        return {
            ventilador: ">"+existingIncubadora.Ventilador1,
            foco: ">"+existingIncubadora.foco
        };    
    }

    async getArduino(idIncubadora:number){
        
        var existingIncubadora = await this.incubadoraRepository.findOne({
            where: { IdIncubadora: idIncubadora }
        });

        return existingIncubadora;    
    }
}
