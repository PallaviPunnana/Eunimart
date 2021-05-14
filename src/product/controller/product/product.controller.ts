import { Body, Controller, Get, HttpStatus, Patch, Post, Query, Res } from '@nestjs/common';
import { ArchivesService } from 'src/archives/service/archives/archives.service';
import { CompartmentService } from 'src/compartment/service/compartment/compartment.service';
import { ProductService } from 'src/product/service/product/product.service';

@Controller('product')
export class ProductController {
    constructor(
        private readonly productService: ProductService,
        private readonly compartmentService: CompartmentService,
        private readonly archiveService: ArchivesService
    ) {}
    @Post('create')
    async createCompartment(
        @Body() input,
        @Res() res
    ) {
        try {
            const id = await this.productService.createProduct(input);
            res.status(HttpStatus.OK).send({data: id});
        } catch (e) {
            console.log(e);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({message: 'Problem at our side. Please try again later'});
        }
    }
    @Get('details')
    async getProductDetails(
        @Query() id: number,
        @Res() res
    ) {
        try {
            const details = await this.productService.getProduct(id);
            res.status(HttpStatus.OK).send({data: details});
        } catch (e) {
            console.log(e);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({message: 'Problem at our side. Please try again later'});
        }
    }
    @Get('by-category')
    async getCategoryWiseProducts(
        @Query() category: string,
        @Res() res
    ) {
        try {
            const details = await this.productService.getProductByCategory(category);
            res.status(HttpStatus.OK).send({data: details});
        } catch (e) {
            console.log(e);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({message: 'Problem at our side. Please try again later'});
        }
    }
    @Patch()
    async updateProduct(
        @Body() input,
        @Res() res
    ) {
        try {
            const previousQuantity = (await this.compartmentService.getCompartmentDetails(input.compartmentId)).quantity
            await this.compartmentService.updateQuantity(input.compartmentId, input.skuId, input.quantity, input.operation);
            const totalQuantity = (await this.compartmentService.getCompartmentDetails(input.compartmentId)).quantity
            await this.archiveService.logArchive({
                skuId: input.skuId,
                action: input.action,
                quantity: input.quantity,
                compartmentId: input.compartmentId,
                before: previousQuantity,
                after: totalQuantity
            })
            res.status(HttpStatus.OK).send({message: 'Successful'});
        } catch (e) {
            console.log(e);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({message: 'Problem at our side. Please try again later'});
        }
    }
}
