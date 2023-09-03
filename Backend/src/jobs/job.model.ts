import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, ObjectId, Types } from 'mongoose';
import { User } from '../users/user.model';

@Schema() 
export class Job extends Document{
    @Prop()
    driver_inv_no?: string;
    @Prop()
    client_inv_no?: string;
    @Prop()
    job_ref_no?: string;
    @Prop()
    date?: string;
    @Prop()
    job_type?: number;
    @Prop()
    cr_to_ac?: string;
    @Prop()
    pickup_location?: string;
    @Prop()
    dest_location?: string;
    @Prop()
    start_time?: string;
    @Prop()
    departure_time?: string;
    @Prop({ type: Types.ObjectId, ref: 'user' })
    //@Prop()
    client?: User;
    @Prop({ type: Types.ObjectId, ref: 'user' })
    //@Prop()
    driver?: User;
    @Prop()
    standard_rate?: number;
    @Prop()
    total_hours?: number;
    @Prop()
    mileage_rate?: number;
    @Prop()
    total_mileage?: number;
    @Prop()
    fixed_rate_charge?: number;
    @Prop()
    waiting_time_charge?: number;
    @Prop()
    parking_charge?: number;
    @Prop()
    congestion_charge?: number;
    @Prop()
    airport_dropoff_charge?: number;
    @Prop()
    inv_ammount?: number;
    @Prop()
    ammount_paid?: number;
    @Prop()
    paid_date?: string;
    @Prop()
    add_notes?: string;
    @Prop()
    is_delete?: boolean;
}

export const JobSchema = SchemaFactory.createForClass(Job);
JobSchema.set('timestamps', true);


