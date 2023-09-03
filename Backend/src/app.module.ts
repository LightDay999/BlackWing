import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

import { UserModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';
import { DriverModule } from './driver/driver.module';
import { CustomerModule } from './customer/customer.module';
import { JobModule } from './jobs/job.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/', {dbName: 'BlackWing'}),
    AuthModule,
    UserModule,
    DriverModule,
    CustomerModule,
    JobModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
