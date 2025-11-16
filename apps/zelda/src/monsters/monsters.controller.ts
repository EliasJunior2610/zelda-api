import { Controller, Get, Query, Param } from "@nestjs/common";
import { MonstersService } from "./monsters.service";
import type { GetParams } from "../assets/interfaces";

@Controller('monsters')
export class MonstersController {
    constructor(private monstersService: MonstersService) { }

    @Get()
    public async findAll(@Query() query: GetParams): Promise<any> {
        return this.monstersService.findAll(query);
    }

    @Get(':id')
    public async findById(@Param() params: any): Promise<any> {
        return this.monstersService.findById(params.id);
    }
}