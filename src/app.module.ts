import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { UserModule } from './Modulos/user/User.module';
import { TemperaturaModule } from './Modulos/temperatura/temperatura.module';
import { HumedadModule } from './Modulos/humedad/humedad.module';
import { HuevoModule } from './Modulos/huevo/huevo.module';
import { IncubadoraModule } from './Modulos/incubadora/incubadora.module';

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'ccontrolz.com',
      port: 3306,
      username: 'nibcqvah_edsghot',
      password: 'Repro123.',
      database: 'nibcqvah_IOT_INCUBADORA',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true

  }), UserModule,HuevoModule,HumedadModule,TemperaturaModule,IncubadoraModule],
  controllers: [],
  providers: [],
})
export class AppModule {}