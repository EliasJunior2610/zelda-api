import { Module } from '@nestjs/common';
import { BossesModule } from './bosses/bosses.module';
import { CharactersModule } from './characters/characters.module';
import { DungeonsModule } from './dungeons/dungeons.module';
import { GamesModule } from './games/games.module';

@Module({
  imports: [
    BossesModule,
    CharactersModule,
    DungeonsModule,
    GamesModule,
  ],
})
export class AppModule { }
