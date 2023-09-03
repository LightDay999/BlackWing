
import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { IUser } from './user.interface';
import  {Model}  from 'mongoose';
import { CreateUserDto } from './user.create.dto';
import { UpdateUserDto } from './user.update.dto';
import { User } from './user.model';
import e from 'express';


@Injectable()
export class UserService {
 constructor(@InjectModel('user') private userModel:Model<IUser>) { }
 
 //New User create
 async createUser(createUserDto : CreateUserDto): Promise<IUser> {
    const newUser = await new this.userModel(createUserDto);
    return newUser.save();
 }

 async getExistingUser(query: object): Promise<IUser> {
    return this.userModel.findOne(query);
 }

 async getQueryResult(query: any): Promise<any> {
   if(query.page && query.items_per_page) {
      try {
         const data = await this.userModel
         .find({})
         .skip(((Number(query.page)) -1) * (Number(query.items_per_page)))
         .limit(Number(query.items_per_page));

         const res_data: Array<any> = new Array<any>();
         
         data.forEach((element) => {
            res_data.push({
               id: element._id,
               fullname: (element.firstname ? element.firstname : ""),
               shortname: element.shortname ? element.shortname : "",
               email: element.email ? element.email : "",
               address: element.address ? element.address.addressLine : "",
               mobile: element.mobile ? element.mobile: "",
               role: element.role ? element.role: 0
            })
         });
         return {
            data: res_data
         };
      } catch {
         return null;
      }
  
   }
 }
 
//
// async LoginUser(email: string, password: string) : Promise<IUser> {
//   const existingUser = await 
// }


}
