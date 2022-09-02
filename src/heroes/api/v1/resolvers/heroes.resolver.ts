import { Injectable } from "@nestjs/common";
import { HeroesInternalService } from "src/heroes/services";
import { Hero, PowerStats } from "../typedefs";

@Injectable()
export class HeroesResolver {

    constructor(private heroService: HeroesInternalService) {}

    public async getAllHeroes(): Promise<Hero[]> {
        return this.heroService.getAllHeroes()
    }

    public async getHeroById(id: number): Promise<Hero> {
        return this.heroService.getHeroById(id)
    }

    public async getPowerStatsById(id: number): Promise<PowerStats> {
        return await this.heroService.getPowerStatsById(id)
    }

    public async getAllPowerStats(): Promise<PowerStats[]> {
        return await this.heroService.getAllPowerStats()
    }

}