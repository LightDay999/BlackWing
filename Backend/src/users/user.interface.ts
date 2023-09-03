
import { Document } from "mongoose";
export interface IUser extends Document {
    readonly firstname?: string;
    readonly lastname?: string;
    readonly shortname?: string;
    readonly email?: string;
    readonly address?: IUserAddress;
    readonly mobile?: string;
    readonly password?: string;
    readonly role?: number;  // 0: Super Admin; 1: Client; 2: Driver
    readonly photo?: string;
    readonly company?: string;
    readonly driver_type: number // 0: personal, 1: operator
    readonly driver_licence_number?: string;
    readonly vehicle_license_number?: string;
    readonly car_type?: string;
    readonly bank_account_info?: string;
    readonly is_deletes?: boolean;
    readonly createdAt?: string;
    readonly updatedAt?: string;
}

export interface IUserAddress extends Document {
    readonly addressLine?: string
    readonly city?: string
    readonly state?: string
    readonly postCode?: string
}