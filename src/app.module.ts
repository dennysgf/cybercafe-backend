import {
  AdministradoresController,
  EstacionesController,
  ImpresionesController,
  ProductosController,
  SesionesController,
  TransaccionesController,
  UsuariosController,
} from './controller/index';
import {
  AdministradoresService,
  EstacionesService,
  ImpresionesService,
  ProductosService,
  SesionesService,
  TransaccionesService,
  UsuariosService,
} from './services/index';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import {
  Usuario,
  Estacion,
  Sesion,
  Transaccion,
  Producto,
  Impresion,
  Administrador,
} from './entitys/index';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [
        Usuario,
        Estacion,
        Sesion,
        Transaccion,
        Producto,
        Impresion,
        Administrador,
      ],
      synchronize: process.env.DB_SYNCHRONIZE === 'true',
      logging: process.env.DB_LOGGING === 'true',
    }),
  ],
  controllers: [
    AdministradoresController,
    ImpresionesController,
    ProductosController,
    TransaccionesController,
    SesionesController,
    EstacionesController,
    UsuariosController,
  ],
  providers: [
    AdministradoresService,
    ImpresionesService,
    ProductosService,
    TransaccionesService,
    SesionesService,
    EstacionesService,
    UsuariosService,
  ],
})
export class AppModule {}
