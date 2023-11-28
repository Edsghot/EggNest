import {Entity,Column,PrimaryGeneratedColumn} from "typeorm";

@Entity({name:'Incubadora'})
export class Incubadora{
    @PrimaryGeneratedColumn()
    IdIncubadora: number;
    @Column()
    IdUser: number;
    @Column()
    Ventilador1: string;
    @Column()
    foco: string
}