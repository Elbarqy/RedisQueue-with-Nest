import { OnQueueActive, OnQueueWaiting, Process, Processor } from "@nestjs/bull";
import { Job } from "bull";

@Processor('firstQ')
export class FirstConumer {
  @Process()
  async transcode(job: Job<unknown>) {
    console.log(job.data)
    job.discard();
  }

  @OnQueueActive()
  onActive(job: Job) {
    console.log(
      `Processing job ${job.id} of type ${job.name} with data ${job.data.item}...`,
    );
  }
}