import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { CompartmentService } from 'src/compartment/service/compartment/compartment.service';
import {ApiTags} from '@nestjs/swagger';
import { WarehouseDto } from 'src/warehouse/dtos/warehouseDto';

@ApiTags('warehouse')
@Controller('warehouse')
export class WarehouseController {
    constructor(
        private readonly compartmentService: CompartmentService
    ) {}
    @Post('add-product')
    async addProduct(
        @Body() input: WarehouseDto,
        @Res() res
    ) {
        try {
            await this.compartmentService.updateQuantity(input.compartmentId, input.skuId, 1, 'add')
        } catch (e) {
            console.log(e);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({message: 'Problem at our side. Please try again later'});
        }
    }
}
