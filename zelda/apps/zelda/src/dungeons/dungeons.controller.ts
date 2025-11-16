import { Controller, Get, Query, Param } from "@nestjs/common";
import { DungeonsService } from "./dungeons.service";
import type { GetParams } from "../assets/interfaces";

@Controller('dungeons')
export class DungeonsController {
    constructor(private dungeonsService: DungeonsService) {}

    @Get()
    public async findAll(@Query() query: GetParams): Promise<any> {
        return this.dungeonsService.findAll(query);
    }

    @Get(':id')
    public async findById(@Param() params: any): Promise<any> {
        return this.dungeonsService.findById(params.id);
    }
}