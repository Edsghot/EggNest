import {Entity,Column,PrimaryGeneratedColumn} from "typeorm";

@Entity({name:'Incubadora'})
export class Incubadora{
    @PrimaryGeneratedColumn()
    IdIncubadora: number;
    @Column()
    idUser: number;
    @Column()
    Ventilador1: boolean;
    @Column()
    Ventilador2: boolean;
    @Column()
    foco: boolean
}