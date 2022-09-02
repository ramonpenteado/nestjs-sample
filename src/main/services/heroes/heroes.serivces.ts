import { Injectable } from '@nestjs/common';
import { Hero, PowerStats } from 'src/heroes';
import { HeroesResolver } from 'src/heroes/api/v1/resolvers';

@Injectable()
export class HeroesService {

  constructor(private heroesResolver: HeroesResolver) {}

  public async getAllHeroes(): Promise<Hero[]> {
    return this.heroesResolver.getAllHeroes()
  }

  public async getHeroById(id: number): Promise<Hero> {
    return this.heroesResolver.getHeroById(id)
  }

  public async getPowerStatsById(id: number): Promise<PowerStats> {
    return await this.heroesResolver.getPowerStatsById(id)
  }

  public async getAllPowerStats(): Promise<PowerStats[]> {
    return await this.heroesResolver.getAllPowerStats()
  }

}
