import {Entity,Column,PrimaryGeneratedColumn} from "typeorm"

@Entity({name: 'User'})
export class User{
    @PrimaryGeneratedColumn()
    Id: number;
    @Column()
    Nombre: string;
    @Column()
    Email: string;
    @Column()
    Password: string;

}

