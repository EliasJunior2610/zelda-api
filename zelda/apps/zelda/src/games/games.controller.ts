import { Controller, Get, Query, Param } from "@nestjs/common";
import { GamesService } from "./games.service";
import type { GetParams } from "../assets/interfaces";

@Controller('games')
export class GamesController {
    constructor(private dungeonsService: GamesService) {}

    @Get()
    public async findAll(@Query() query: GetParams): Promise<any> {
        return this.dungeonsService.findAll(query);
    }

    @Get(':id')
    public async findById(@Param() params: any): Promise<any> {
        return this.dungeonsService.findById(params.id);
    }
}