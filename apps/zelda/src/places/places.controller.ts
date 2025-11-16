import { Controller, Get, Query, Param } from "@nestjs/common";
import { PlacesService } from "./places.service";
import type { GetParams } from "../assets/interfaces";

@Controller('places')
export class PlacesController {
    constructor(private placesService: PlacesService) { }

    @Get()
    public async findAll(@Query() query: GetParams): Promise<any> {
        return this.placesService.findAll(query);
    }

    @Get(':id')
    public async findById(@Param() params: any): Promise<any> {
        return this.placesService.findById(params.id);
    }
}