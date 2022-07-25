import { Controller, Get } from '@nestjs/common';
import { HeroesService } from '../../services/';

@Controller('heroes')
export class HeroesController {
  constructor(private readonly appService: HeroesService) {}

  @Get('all')
  getHello(): string {
    return this.appService.getHello();
  }
}

