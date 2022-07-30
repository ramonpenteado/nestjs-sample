import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HeroesController, HeroesService } from './main/';
import { HeroesInternalService, HeroesResolver } from './heroes'
import settings from './shared/settings/setting'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [settings]
    }),
  ],
  controllers: [HeroesController],
  providers: [HeroesService, HeroesInternalService, HeroesResolver],
})
export class AppModule {}
