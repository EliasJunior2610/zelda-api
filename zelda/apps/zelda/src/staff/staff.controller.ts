import { Controller, Get, Query, Param } from "@nestjs/common";
import { StaffService } from "./staff.service";
import type { GetParams } from "../assets/interfaces";

@Controller('staff')
export class StaffController {
    constructor(private staffService: StaffService) { }

    @Get()
    public async findAll(@Query() query: GetParams): Promise<any> {
        return this.staffService.findAll(query);
    }

    @Get(':id')
    public async findById(@Param() params: any): Promise<any> {
        return this.staffService.findById(params.id);
    }
}