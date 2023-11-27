import {Entity,Column,PrimaryGeneratedColumn}  from 'typeorm'

@Entity({name: 'Huevo'})
export class Huevo{
    @PrimaryGeneratedColumn()
    IdHuevo: number;
    @Column()
    IdUser: number;
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
    @Column()
    ImagenHuevo: string;
}