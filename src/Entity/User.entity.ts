import {Entity,Column,PrimaryGeneratedColumn} from "typeorm"

@Entity({name: 'User'})
export class User{
    @PrimaryGeneratedColumn()
    IdUser: number;
    @Column()
    Nombre: string;
    @Column()
    Email: string;
    @Column()
    Password: string;
    @Column()
    tipo: string;
}

