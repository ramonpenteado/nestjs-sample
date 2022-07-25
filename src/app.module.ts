import { Module } from '@nestjs/common';
import { HeroesController, HeroesService } from './main/';

@Module({
  imports: [],
  controllers: [HeroesController],
  providers: [HeroesService],
})
export class AppModule {}
