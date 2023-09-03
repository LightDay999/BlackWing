
import { Document, Types} from "mongoose";
export interface IJob extends Document {
    readonly driver_inv_no?: string;
    readonly client_inv_no?: string;
    readonly job_ref_no?: string;
    readonly date?: string;
    readonly job_type?: number; // 1: Airport Transfer, 2: A2B or P2P, 3: As directed 4: Roadshow
    readonly cr_to_ac?: string;
    readonly pickup_location?: string;
    readonly dest_location?: string;
    readonly start_time?: string;
    readonly departure_time?: string;
    readonly client?: string;
    readonly driver?: string;
    readonly standard_rate?: number;
    readonly total_hours?: number;
    readonly mileage_rate?: number;
    readonly total_mileage?: number;
    readonly fixed_rate_charge?: number;
    readonly waiting_time_charge?: number;
    readonly parking_charge?: number;
    readonly congestion_charge?: number;
    readonly airport_dropoff_charge?: number;
    readonly inv_ammount?: number;
    readonly ammount_paid?: number;
    readonly paid_date?: string;
    readonly add_notes?: string;
    readonly is_delete?: boolean;
}