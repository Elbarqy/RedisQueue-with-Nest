import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirstConumer } from './consumer/queue.consumer';
import { QueueModule } from './queue/queue.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    QueueModule,
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
        password: "eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81",
      }
    }),
  ],
  controllers: [AppController],
  providers: [AppService,FirstConumer],
})
export class AppModule { }
