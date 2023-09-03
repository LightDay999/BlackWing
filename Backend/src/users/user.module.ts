import {  Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';


import { UserController } from './user.controller';
import { UsersController } from './users.controller';
import { UserService } from './user.service';
import { UserSchema } from './user.model';

@Module({
    imports:[
        MongooseModule.forFeature([{name:'user',schema:UserSchema}]),
       
    ],
    controllers: [UserController, UsersController],
    providers: 
    [UserService],
})
export class UserModule {}
