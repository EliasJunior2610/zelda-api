import { Controller, Get, Query, Param } from "@nestjs/common";
import { CharactersService } from "./characters.service";
import type { GetParams } from "../assets/interfaces";

@Controller('characters')
export class CharactersController {
    constructor(private charactersService: CharactersService) {}

    @Get()
    public async findAll(@Query() query: GetParams): Promise<any> {
        return this.charactersService.findAll(query);
    }

    @Get(':id')
    public async findById(@Param() params: any): Promise<any> {
        return this.charactersService.findById(params.id);
    }
}