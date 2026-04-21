import { Body, Controller, Post } from '@nestjs/common';
import { ExtractRequestSchema } from '@ragflow/shared';
import { ExtractService } from './extract.service';

@Controller('extract')
export class ExtractController {
  constructor(private readonly extractService: ExtractService) {}

  @Post()
  extract(@Body() body: any) {
    const data = ExtractRequestSchema.parse(body);
    return this.extractService.extract(data);
  }
}
