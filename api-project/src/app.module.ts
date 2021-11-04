import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({ //al declarar la conexion de base de datos aqui... esta se usará para todo el proyecto
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'eaalegria',
      password: 'postgres',
      database: 'mydb',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
      retryDelay: 3000,
      retryAttempts: 10
    }),
    TasksModule
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
