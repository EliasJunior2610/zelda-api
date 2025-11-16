import { Module } from '@nestjs/common';
import { BossesModule } from './bosses/bosses.module';
import { CharactersModule } from './characters/characters.module';
import { DungeonsModule } from './dungeons/dungeons.module';
import { GamesModule } from './games/games.module';
import { ItemsModule } from './items/items.module';
import { MonstersModule } from './monsters/monsters.module';
import { PlacesModule } from './places/places.module';
import { StaffModule } from './staff/staff.module';

@Module({
  imports: [
    BossesModule,
    CharactersModule,
    DungeonsModule,
    GamesModule,
    ItemsModule,
    MonstersModule,
    PlacesModule,
    StaffModule,
  ],
})
export class AppModule { }
