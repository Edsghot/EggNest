import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Huevo } from 'src/Entity/Huevo.entity';
import { createUserHuevo } from 'src/Request/User/createUserHuevo.request';
import { Repository } from 'typeorm';

@Injectable()
export class HuevoService {
    constructor(
        @InjectRepository(Huevo) private huevoRepository: Repository<Huevo>
        ){}

        async HuevoUser(IdUser: number) {
        
              const existingHuevo = await this.huevoRepository.find({
                where: { IdUser }
              });

              if(existingHuevo === null){
                return { msg: "Usted no cuenta con Huevos Registrados" };
              }else{
                return existingHuevo
              }
              
        }

        async createHuevo(huevo: createUserHuevo,idUser:number){
          const {fechaInicio,cantidadDias,cantidadHuevo} = huevo;

          const newHuevo = new Huevo();
          newHuevo.Tipo = "Gallina";
          newHuevo.Nombre = ".....";
          newHuevo.ImagenHuevo = null;
          newHuevo.IdUser = idUser;
          newHuevo.FechaInicio = fechaInicio;
          newHuevo.FechaFin = null;
          newHuevo.CantidadHuevos = cantidadHuevo;
          newHuevo.CantidadDias = cantidadDias;

          try{
            return this.huevoRepository.create(newHuevo);

          }catch(e){
            {msg: "error "+e}
          }
          
        }
}
