import { Controller, Get, Post, Req, Res, Body, Param } from "@nestjs/common";
import { UserService } from "./user.service";
import { IUser, IUserAddress } from "./user.interface";
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './user.create.dto';

@Controller('auth')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('/signup')
    async createUser(
        @Body('password') password?: string,
        @Body('email') email?: string,
        @Body('firstname') firstname?: string,
        @Body('lastname') lastname?: string,
        @Body('shortname') shortname?: string,
        @Body('address') address?: IUserAddress,
        @Body('role') role?: number,
        @Body('mobile') mobile?: string,
        @Body('company') company?: string,
        @Body('driver_type') driver_type?: number,
        @Body('driver_license_number') driver_license_number?: string,
        @Body('vehicle_license_number') vehicle_license_number?: string,
        @Body('car_type') car_type?: string,
        @Body('bank_account_info') bank_account_info?: string,

    ) : Promise<IUser> {
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser : CreateUserDto = {
            email: email,
            firstname: firstname,
            lastname: lastname,
            shortname: shortname,
            address: address,
            role: role,
            mobile: mobile,
            company: company,
            driver_type: driver_type,
            driver_license_number: driver_license_number,
            vehicle_license_number: vehicle_license_number,
            car_type: car_type,
            bank_account_info: bank_account_info,
            password: hashPassword,
            is_delete: 0
        }


        const result = await this.userService.createUser(newUser);
        return result;
    };

}