import {Entity,Column,PrimaryGeneratedColumn} from "typeorm";

@Entity({name:'Temperatura'})
export class Temperatura{
    @PrimaryGeneratedColumn()
    IdTemperatura: number;
    @Column()
    IdIncubadora:number;
    @Column()
    valorTemperatura: number;
    @Column()
    valorHumedad: number;
    @Column()
    fecha: Date;
}