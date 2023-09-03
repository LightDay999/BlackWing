import { IsEmail, IsNotEmpty, IsNumber, IsObject, IsString, MaxLength } from "class-validator";
import { IUserAddress } from "../users/user.interface";

export class CreateUserDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly firstname?: string;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly lastname?: string;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly shortname?: string;

    @IsString()
    @MaxLength(50)
    @IsEmail()
    readonly email?: string;

    @IsObject()
    @MaxLength(80)
    readonly address?: IUserAddress;

    @IsString()
    @MaxLength(30)
    readonly mobile?: string;

    @IsString()
    @MaxLength(50)
    readonly password?: string;

    @IsNumber()
    @IsNotEmpty()
    readonly role?: number;  // 0: Super Admin; 1: Client; 2: Driver

    @IsString()
    @MaxLength(60)
    readonly company?: string;

    @IsNumber()
    readonly driver_type?: number;

    @IsString()
    @MaxLength(80)
    readonly driver_license_number?: string;

    @IsString()
    @MaxLength(80)
    readonly vehicle_license_number?: string;
    
    @IsString()
    @MaxLength(80)
    readonly car_type?: string;

    @IsString()
    @MaxLength(80)
    readonly bank_account_info?: string;

    @IsNumber()
    readonly is_delete?: number;
}