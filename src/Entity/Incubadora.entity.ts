import {Entity,Column,PrimaryGeneratedColumn} from "typeorm";

@Entity({name:'Incubadora'})
export class Incubadora{
    @PrimaryGeneratedColumn()
    Id: number;
    @Column()
    idUser: number;
    @Column()
    Humedad: number;
    @Column()
    Temperatura: number;
    @Column()
    Ventilador1: boolean;
    @Column()
    Ventilador2: boolean;
    @Column()
    foco: boolean
}