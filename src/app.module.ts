import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db',
      port: 3306,
      username: 'user',
      password: 'password',
      database: 'database',
      //entities: ["../dist/entities/*.js"],
      //entities: ["/dist/**/**/*.js"],
      entities: [__dirname + '/../dist/**/*.entity.js'],
      migrations: ['migrations/*.ts'],
      synchronize: false,
    }),
    TodosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
