import { Module } from '@nestjs/common';
import { HeroesController } from '../../controllers/';
import { HeroesService } from '../../services';

@Module({
  imports: [],
  controllers: [HeroesController],
  providers: [HeroesService],
})
export class HeroesModule {}
