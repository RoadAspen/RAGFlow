import { Body, Controller, Post } from '@nestjs/common';
import { ExtractService } from './extract.service';

@Controller('extract')
export class ExtractController {
  // 必须这样写，不能加任何多余代码破坏注入
  constructor(private readonly extractService: ExtractService) {}

  @Post()
  extract(@Body() body: any) {
    console.log('请求 body:', body);

    return this.extractService.extract();
  }
}
