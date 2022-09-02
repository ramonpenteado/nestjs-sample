import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Hero, PowerStats } from '../api'
import axios from 'axios'

@Injectable()
export class HeroesInternalService {

    private readonly logger = new Logger(HeroesInternalService.name)

    constructor(private configService: ConfigService) {}

    private HEROES_API_URL = this.configService.get<string>('heroes_api_url');


    public async getAllHeroes(): Promise<Hero[]> {
        const ALL_HEROES_PATH = '/all.json'
        const response = await axios.get(`${this.HEROES_API_URL}/${ALL_HEROES_PATH}`)
        return response.data
    }

    public async getHeroById(id: number): Promise<Hero> {
        const HEROES_BY_ID_PATH = `/id/${id}.json`
        const response = await axios.get(`${this.HEROES_API_URL}/${HEROES_BY_ID_PATH}`)
        return response.data
    }

    public async getPowerStatsById(id: number): Promise<PowerStats> {
        const POWER_STATS_BY_ID_PATH = `/powerstats/${id}.json`
        const response = await axios.get(`${this.HEROES_API_URL}/${POWER_STATS_BY_ID_PATH}`)
        return response.data
    }

    public async getAllPowerStats(): Promise<PowerStats[]> {
        const allHeroes: Hero[] = await this.getAllHeroes()
        const allPowerStats: PowerStats[] = await Promise.all(allHeroes.map(async (hero: Hero) => {
            return await this.getPowerStatsById(hero.id)
        }))
        return allPowerStats
    }

}