import { Controller, Get, Query, Param } from "@nestjs/common";
import { ItemsService } from "./items.service";
import type { GetParams } from "../assets/interfaces";

@Controller('items')
export class ItemsController {
    constructor(private itemsService: ItemsService) {}

    @Get()
    public async findAll(@Query() query: GetParams): Promise<any> {
        return this.itemsService.findAll(query);
    }

    @Get(':id')
    public async findById(@Param() params: any): Promise<any> {
        return this.itemsService.findById(params.id);
    }
}