import { Controller, Get, Post, Req, Res, Body, Param, Query, Request } from "@nestjs/common";
import { UserService } from "./user.service";
import { IUser } from "./user.interface";
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './user.create.dto';

@Controller('users')
export class UsersController {
   constructor(private readonly userService: UserService) {}
   @Get('query')
   getItemsWithQuery(@Query() query) {
       return  this.userService.getQueryResult(query)
  }
}