import { Injectable } from '@nestjs/common';

@Injectable()
export class ExtractService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async extract(_data: any) {
    return Promise.resolve({
      name: '张三',
      city: '北京',
    });
  }
}
