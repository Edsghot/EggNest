import {Entity,Column,PrimaryGeneratedColumn, PrimaryColumn} from "typeorm";

@Entity({name:'Humedad'})
export class Humedad{
    @PrimaryColumn()
    IdHumedad: number;
    @Column()
    idIncubadora:number;
    @Column()
    valor: number;
    @Column()
    fecha: Date;
}