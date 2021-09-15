import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { RestApiModule } from './rest-api/rest-api.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, PostsModule, RestApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}



