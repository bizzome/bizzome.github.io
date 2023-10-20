import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHomePage(): string {
    return this.appService.getHomePage();
  }

  @Get()
  @Render('index')
  root() {
    return { message: 'Hello world!' };
  }
}
