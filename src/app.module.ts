import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'example',
      entities: [User],
      // autoLoadEntities: true,
      synchronize: true, // Don't use this in production
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
