import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IUserAddress } from "./user.interface";
import { Document } from "mongoose";

@Schema() 
export class User extends Document{
    @Prop()
    firstname: string;
    @Prop() 
    lastname: string;
    @Prop() 
    shortname: string;
    @Prop()
    email: string;

    address: IUserAddress;
    @Prop()
    mobile: string;
    @Prop()
    password: string;
    @Prop()
    role: number;  // 0: Super Admin; 1: Client; 2: Driver
    @Prop()
    company: string; // company name
    @Prop()
    driver_type: number // 0: personal, 1: operator
    @Prop()
    driver_license_number: string;
    @Prop()
    vehicle_license_number: string;
    @Prop()
    car_type: string;
    @Prop()
    bank_account_info: string;
    @Prop()
    is_delete: number; //0: normal 1: deleted
}

export const UserSchema = SchemaFactory.createForClass(User);
UserSchema.set('timestamps', true);