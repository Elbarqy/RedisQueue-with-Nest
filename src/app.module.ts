import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QueueModule } from './queue/queue.module';

@Module({
  imports: [QueueModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
