import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { scheduleModelData } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/schedule')
  getSchedule(): scheduleModelData {
    return this.appService.getSchedule();
  }
}
