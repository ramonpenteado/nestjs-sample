import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HeroesController } from '../../controllers/';
import { HeroesService } from '../../services';
import { HeroesInternalService, HeroesResolver } from 'src/heroes';

@Module({
  imports: [],
  controllers: [HeroesController],
  providers: [
    HeroesService,
    ConfigService,
    HeroesInternalService,
    HeroesResolver,
  ],
})
export class HeroesModule {}
