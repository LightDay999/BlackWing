import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IJob } from './job.interface';
import  {Model}  from 'mongoose';

@Injectable()
export class JobService {
    constructor(@InjectModel('job') private jobModel:Model<IJob>) { }

    //New User create
    async createJob(createJobDto : IJob): Promise<IJob> {
        const newJob = await new this.jobModel(createJobDto);
        return newJob.save();
    }

    async getQueryResult(query: any): Promise<any> {
        if(query.page && query.items_per_page) {
            try {
                const filterConditions = [];

                // Driver Name Search Filter
                if (query.filter_searchdriver) {
                    const driverName = query.filter_searchdriver;
                    filterConditions.push({
                        $or: [
                            { 'driver.firstname': { $regex: driverName, $options: 'i' } },
                            { 'driver.lastname': { $regex: driverName, $options: 'i' } },
                            { $expr: { $regexMatch: { input: { $concat: ['$driver.firstname', ' ', '$driver.lastname'] }, regex: driverName, options: 'i' } } }
                        ]
                    });
                }

                if (query.filter_searchclient) {
                    const clientName = query.filter_searchclient;
                    filterConditions.push({
                        $or: [
                            { 'client.firstname': { $regex: clientName, $options: 'i' } },
                            { 'client.lastname': { $regex: clientName, $options: 'i' } },
                            { $expr: { $regexMatch: { input: { $concat: ['$client.firstname', ' ', '$client.lastname'] }, regex: clientName, options: 'i' } } }
                        ]
                    });
                }

                // Date Range Filter
                if (query.filter_startdate) {
                    filterConditions.push({
                        createdAt: {
                            $gte: new Date(query.filter_startdate)
                        }
                    });
                }

                if (query.filter_enddate) {
                    filterConditions.push({
                        createdAt: {
                            $lte: new Date(query.filter_enddate)
                        }
                    });
                }

                const data = await this.jobModel
                    .find({
                        $and: filterConditions.length > 0 ? filterConditions : [{}]
                    })
                    .populate('client')
                    .populate('driver')
                    .skip(((Number(query.page)) - 1) * (Number(query.items_per_page)))
                    .limit(Number(query.items_per_page))
                    .exec();
                return {
                    data: data
                }
            } catch(err) {
                return null;
            }
            
            
        }
    }
      
}
