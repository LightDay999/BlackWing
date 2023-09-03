import {  Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/users/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from 'src/users/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/users/user.model';

import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { JobModule } from 'src/jobs/job.module';
import { JobService } from 'src/jobs/job.service';

@Module({
  imports: [UserModule, PassportModule, JwtModule.register({
    secret: 'secret',
    signOptions: { expiresIn: '20m' },
  }), MongooseModule.forFeature([{name: "user", schema: UserSchema}])],
  providers: [
    AuthService, 
    UserService, 
    JwtStrategy,
    LocalStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
