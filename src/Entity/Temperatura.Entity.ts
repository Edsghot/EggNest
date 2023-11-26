import {Entity,Column,PrimaryGeneratedColumn, PrimaryColumn} from "typeorm";

@Entity({name:'Temperatura'})
export class Temperatura{
    @PrimaryColumn()
    IdTemperatura: number;
    @Column()
    IdIncubadora:number;
    @Column()
    valor: number;
    @Column()
    fecha: Date;
}