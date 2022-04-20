import { InjectQueue, OnQueueActive, Process, Processor } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Job, Queue } from 'bull';

@Injectable()
export class QueueService {

    constructor(
        @InjectQueue('firstQ') private firstQue: Queue
    ) {
    }
    public addToQueue(item: string, delay: number): Promise<any> {
        return this.firstQue.add({
            item,
            timeStamp: Date.now(),
        },
        { delay, lifo: false }
        )
    }
    public next() {
        return this.firstQue.getNextJob();
    }

}

