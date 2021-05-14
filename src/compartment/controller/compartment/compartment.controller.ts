import { Body, Controller, Get, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { CompartmentService } from 'src/compartment/service/compartment/compartment.service';

@Controller('compartment')
export class CompartmentController {
    constructor(
        private readonly compartmentService: CompartmentService
    ) {}
    @Post('create')
    async createCompartment(
        @Body() input,
        @Res() res
    ) {
        try {
            const id = await this.compartmentService.createCompartment(input);
            res.status(HttpStatus.OK).send({data: id});
        } catch (e) {
            console.log(e);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({message: 'Problem at our side. Please try again later'});
        }
    }
    @Get('details')
    async getCompartmentWiseDetails(
        @Res() res
    ) {
        try {
            const details = await this.compartmentService.getCompartmentWiseData();
            res.status(HttpStatus.OK).send({data: details});
        } catch (e) {
            console.log(e);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({message: 'Problem at our side. Please try again later'});
        }
    }
    @Get('warehouse-details')
    async getWarehouseWiseDetails(
        @Res() res
    ) {
        try {
            const details = await this.compartmentService.getWarehouseWiseData();
            res.status(HttpStatus.OK).send({data: details});
        } catch (e) {
            console.log(e);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({message: 'Problem at our side. Please try again later'});
        }
    }    
}
