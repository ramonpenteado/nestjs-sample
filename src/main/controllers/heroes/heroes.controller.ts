import { Controller, Get, Param } from '@nestjs/common';
import { Hero } from 'src/heroes';
import { HeroesService } from '../../services/';

@Controller('heroes')
export class HeroesController {
  constructor(private readonly appService: HeroesService) {}

  @Get('all')
  public async getAllHeroes(): Promise<Hero[]> {
    return this.appService.getAllHeroes();
  }

  @Get('/:id')
  public async getHeroeById(@Param('id') id: number): Promise<Hero> {
    return this.appService.getHeroById(id);
  }
}

