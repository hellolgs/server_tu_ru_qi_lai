import { Controller, Get } from '@nestjs/common';
import { TimeService } from './time.service';
@Controller('time')
export class TimeController {
  constructor(private timeService: TimeService) {}
  @Get('current')
  getCurrentTime() {
    return {
      currentTime: this.timeService.getCurrentTime(),
      timestamp: this.timeService.getCurrentTimestamp(),
      millisecondTimestamp: this.timeService.getCurrentMillisecondTimestamp(),
      serializedTime: this.timeService.getSerializedCurrentTime(),
    };
  }
}
