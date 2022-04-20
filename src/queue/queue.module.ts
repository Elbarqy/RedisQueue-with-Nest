import { Module } from '@nestjs/common';
import { QueueService } from './queue.service';
import { QueueController } from './queue.controller';
import { BullModule } from '@nestjs/bull';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    BullModule.registerQueue({
      name: "firstQ",
    }),
  ],
  controllers: [QueueController],
  providers: [QueueService],
})
export class QueueModule { }
