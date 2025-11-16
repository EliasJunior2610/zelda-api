import { Module } from "@nestjs/common";
import { BossesController } from "./bosses.controller";
import { BossesService } from "./bosses.service";

@Module({
    controllers: [BossesController],
    providers: [BossesService],
})
export class BossesModule { }