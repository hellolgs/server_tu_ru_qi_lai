import { Injectable } from '@nestjs/common';
import dayjs from 'dayjs';
@Injectable()
export class TimeService {
  // 获取当前服务器时间
  getCurrentTime(): Date {
    return new Date();
  }
  // 获取当前服务器时间的时间戳
  getCurrentTimestamp(): number {
    return dayjs().unix();
  }
  // 获取当前服务器时间的毫秒级时间戳
  getCurrentMillisecondTimestamp(): number {
    return dayjs().valueOf();
  }
  // 获取序列化后的服务器时间
  getSerializedCurrentTime(): string {
    return dayjs().format('YYYY-MM-DD HH:mm:ss');
  }
}
