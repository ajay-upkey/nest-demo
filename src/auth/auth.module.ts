import { UsersService } from './../users/users.service';
import { User } from './../users/entities/user.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
    imports: [TypeOrmModule.forFeature([User]),
    JwtModule.register({
        secretOrPrivateKey: 'DemoSecret'
    })
    ],
    providers: [UsersService, AuthService],
    controllers: [AuthController]
})
export class AuthModule { }