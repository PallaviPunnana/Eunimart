import { Body, Controller, Get, HttpStatus, Patch, Post, Query, Res } from '@nestjs/common';
import { ArchivesService } from 'src/archives/service/archives/archives.service';
import { CompartmentService } from 'src/compartment/service/compartment/compartment.service';
import { ProductService } from 'src/product/service/product/product.service';
import {ApiTags} from '@nestjs/swagger';
import { UpdateCompartmentDto } from 'src/product/dtos/updateProductDto';
import { GetProductDto } from 'src/product/dtos/getProductDetailsDto';
import { GetProductsDto } from 'src/product/dtos/getProductsDetailsDto';
import { ProductDto } from 'src/product/dtos/createProductDto';

@ApiTags('product')
@Controller('product')
export class ProductController {
    constructor(
        private readonly productService: ProductService,
        private readonly compartmentService: CompartmentService,
        private readonly archiveService: ArchivesService
    ) {}
    @Post('create')
    async createProduct(
        @Body() input: ProductDto,
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
        @Query() input: GetProductDto,
        @Res() res
    ) {
        try {
            const details = await this.productService.getProduct(input.skuId);
            res.status(HttpStatus.OK).send({data: details});
        } catch (e) {
            console.log(e);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({message: 'Problem at our side. Please try again later'});
        }
    }
    @Get('by-category')
    async getCategoryWiseProducts(
        @Query() input: GetProductsDto,
        @Res() res
    ) {
        try {
            const details = await this.productService.getProductByCategory(input.category);
            res.status(HttpStatus.OK).send({data: details});
        } catch (e) {
            console.log(e);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({message: 'Problem at our side. Please try again later'});
        }
    }
    @Patch()
    async updateProduct(
        @Body() input: UpdateCompartmentDto,
        @Res() res
    ) {
        try {
            const previousQuantity = (await this.compartmentService.getCompartmentDetails(input.compartmentId)).quantity
            await this.compartmentService.updateQuantity(input.compartmentId, input.skuId, input.quantity, input.operation);
            const totalQuantity = (await this.compartmentService.getCompartmentDetails(input.compartmentId)).quantity
            await this.archiveService.logArchive({
                skuId: input.skuId,
                action: input.operation,
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
