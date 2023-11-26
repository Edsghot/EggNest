import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Huevo } from 'src/Entity/Huevo.entity';
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

                return existingHuevo;

        }
}
