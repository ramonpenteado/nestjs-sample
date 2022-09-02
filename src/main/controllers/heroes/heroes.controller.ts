import { Controller, Get, Logger, Param } from '@nestjs/common';
import { Hero, PowerStats } from 'src/heroes';
import { HeroesService } from '../../services/';

@Controller('heroes')
export class HeroesController {

  private readonly logger = new Logger(HeroesController.name)

  constructor(private readonly appService: HeroesService) {}

  @Get('all')
  public async getAllHeroes(): Promise<Hero[]> {
    return this.appService.getAllHeroes();
  }

  @Get('/allpowerstats')
  public async getAllPowerStats(): Promise<PowerStats[]> {
    this.logger.debug('Getting all power stats')
    return await this.appService.getAllPowerStats();
  }

  @Get('/:id')
  public async getHeroeById(@Param('id') id: number): Promise<Hero> {
    return this.appService.getHeroById(id);
  }

  @Get('/:id/powerstats')
  public async getPowerStatsById(@Param('id') id: number): Promise<PowerStats> {
    return await this.appService.getPowerStatsById(id);
  }

}

