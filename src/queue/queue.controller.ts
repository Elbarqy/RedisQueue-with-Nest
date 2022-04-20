import { OnGlobalQueueActive, OnQueueActive, OnQueueWaiting, Process, Processor } from '@nestjs/bull';
import { Controller, Get, Param, Res } from '@nestjs/common';
import { Cron, CronExpression, Interval } from '@nestjs/schedule';
import { Job } from 'bull';
import { QueueService } from './queue.service';

@Controller('queue')
export class QueueController {
  constructor(
    private readonly queueService: QueueService
  ) { }

  @Get(":item")
  addToSchedule(@Param('item') item: string, @Res() res) {
    this.queueService.addToQueue(item, 1000);
    res.send("this is your item " + item)
  }
}
