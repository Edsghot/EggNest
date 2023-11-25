import {Entity,Column,PrimaryGeneratedColumn}  from 'typeorm'

@Entity({name: 'Huevo'})
export class Huevo{
    @PrimaryGeneratedColumn()
    Id: number;
    @Column()
    IdLogin: number;
    @Column()
    Tipo: string;
    @Column()
    Nombre: string;
    @Column()
    FechaInicio: Date;
    @Column()
    FechaFin: Date;
    @Column()   
    CantidadDias: number;
}