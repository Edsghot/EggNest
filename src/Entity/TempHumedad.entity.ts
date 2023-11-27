import {Entity,Column,PrimaryGeneratedColumn, BeforeInsert} from "typeorm";

@Entity({name:'Temperatura'})
export class Temperatura{
    @PrimaryGeneratedColumn()
    IdTemperatura: number;
    @Column()
    IdIncubadora:number;
    @Column({ type: 'float' })
    valorTemperatura: number;
    @Column({ type: 'float' })
    valorHumedad: number;
    @Column()
    fecha: Date;
    @BeforeInsert()
    setDefaultDate() {
    // Verifica si la fecha ya está establecida
    if (!this.fecha) {
        this.fecha = new Date();
    }
    } 
}