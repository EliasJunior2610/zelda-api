import { Controller, Get, Query } from "@nestjs/common";
import { BossesService } from "./bosses.service";
import type { GetBossesParams } from "./bosses.service";

@Controller('bosses')
export class BossesController {
    constructor(private bossesService: BossesService) {}
    @Get()
    async findAll(@Query() query: GetBossesParams): Promise<any> {
        return this.bossesService.findAll(query);
    }
}