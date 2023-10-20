import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHomePage(): string {
    return "<h1>Hi I'm Bizzo, a software developer!!</h1>";
  }
}
