import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { RestApiModule } from './rest-api/rest-api.module';
import connectionOptions from './ormconfig';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            ...connectionOptions,
            migrations: null,
        }),
        UsersModule,
        PostsModule,
        RestApiModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }



