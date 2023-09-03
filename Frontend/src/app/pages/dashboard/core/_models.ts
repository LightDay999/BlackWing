import {ID, Response} from '../../../../_metronic/helpers'
import { User } from '../../users/core/_models';
export type Job = {
     _id: ID,
     id: ID,
     driver_inv_no?: string;
     client_inv_no?: string;
     job_ref_no?: string;
     date?: string;
     job_type?: number; // 1: Airport Transfer, 2: A2B or P2P, 3: As directed 4: Roadshow
     cr_to_ac?: string;
     pickup_location?: string;
     dest_location?: string;
     start_time?: string;
     departure_time?: string;
     client?: User;
     driver?: User;
     standard_rate?: number;
     total_hours?: number;
     mileage_rate?: number;
     total_mileage?: number;
     fixed_rate_charge?: number;
     waiting_time_charge?: number;
     parking_charge?: number;
     congestion_charge?: number;
     airport_dropoff_charge?: number;
     inv_ammount?: number;
     ammount_paid?: number;
     paid_date?: string;
     add_notes?: string;
     createdAt?: string;
     updatedAt?: string;
     is_delete?: boolean;
}

export type JobsQueryResponse = Response<Array<Job>>

