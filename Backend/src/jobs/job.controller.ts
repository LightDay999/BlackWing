import { Controller, Get, Post, Req, Res, Body, Param, UseGuards, Request, Query } from '@nestjs/common';
import { JobService } from './job.service';
import { IJob } from './job.interface';
import { JwtAuthGuard } from 'src/auth/guards/jwt.auth.guard';
import { Types } from 'mongoose';

@Controller('job')
@UseGuards(JwtAuthGuard)
export class JobController {
    constructor(private readonly jobService: JobService) {}

    
    @Post('/create')
    async createJob(
       @Body('driver_inv_no') drv_inv_no?: string,
       @Body('client_inv_no') cli_inv_no?: string,
       @Body('job_ref_no') job_ref_no?: string,
       @Body('date') date?: string,
       @Body('job_type') job_type?: number,
       @Body('cr_to_ac') cr_to_ac?: string,
       @Body('pickup_location') pickup_loc?: string,
       @Body('dest_location') dest_loc?: string,
       @Body('start_time') start_time?: string,
       @Body('departure_time') departure_time?: string,
       @Body('client') client?: string,
       @Body('driver') driver?: string,
       @Body('standard_rate') standard_rate?: number,
       @Body('total_hours') total_hours?: number,
       @Body('mileage_rate') mileage_rate?: number,
       @Body('total_mileage') total_mileage?: number,
       @Body('fixed_rate_charge') fixed_rate_charge?: number,
       @Body('waiting_time_charge') waiting_time_charge?: number,
       @Body('parking_charge') parking_charge?: number,
       @Body('congestion_charge') congest_charge?: number,
       @Body('airport_dropoff_charge') air_drop_charge?: number,
       @Body('inv_ammount') inv_ammount?: number,
       @Body('ammount_paid') ammount_paid?: number,
       @Body('paid_date') paid_date?: string,
       @Body('add_notes') add_notes?: string,

    ) : Promise<IJob> {
        const newJob = {
            driver_inv_no: drv_inv_no,
            client_inv_no: cli_inv_no,
            job_ref_no: job_ref_no,
            date: date,
            job_type: job_type,
            cr_to_ac: cr_to_ac,
            pickup_location: pickup_loc,
            dest_location: dest_loc,
            start_time: start_time,
            departure_time: departure_time,
            client: client,
            driver: client,
            standard_rate: standard_rate,
            total_hours: total_hours,
            mileage_rate: mileage_rate,
            total_mileage: total_mileage,
            fixed_rate_charge: fixed_rate_charge,
            waiting_time_charge: waiting_time_charge,
            parking_charge: parking_charge,
            congestion_charge: congest_charge,
            airport_dropoff_charge: air_drop_charge,
            inv_ammount: inv_ammount,
            ammount_paid: ammount_paid,
            paid_date: paid_date,
            add_notes: add_notes,
            is_delete: false,
        }

        const result = await this.jobService.createJob(newJob as IJob);
        return result;
    };

    @Get('query')
    getItemsWithQuery(@Query() query) {
        return  this.jobService.getQueryResult(query)
   }
}
