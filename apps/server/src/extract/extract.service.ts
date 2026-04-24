import { Injectable } from '@nestjs/common';

@Injectable()
export class ExtractService {
  async extract() {
    return Promise.resolve({
      code: 200,
      data: {
        name: '张三',
        city: '北京',
      },
    });
  }
}
