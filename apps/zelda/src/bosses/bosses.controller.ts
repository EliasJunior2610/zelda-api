import { Controller, Get, Query, Param } from "@nestjs/common";
import { BossesService } from "./bosses.service";
import type { GetParams } from "../assets/interfaces";

@Controller('bosses')
export class BossesController {
    constructor(private bossesService: BossesService) { }

    @Get()
    public async findAll(@Query() query: GetParams): Promise<any> {
        return this.bossesService.findAll(query);
    }

    @Get(':id')
    public async findOne(@Param() params: any): Promise<any> {
        return this.bossesService.findById(params.id);
    }
}