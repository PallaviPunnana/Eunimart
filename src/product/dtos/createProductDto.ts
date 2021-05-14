import {ApiProperty} from '@nestjs/swagger';

export class ProductDto {
    @ApiProperty()
    skuId: number;
    @ApiProperty()
    title: string;
    @ApiProperty()
    price: number;
    @ApiProperty()
    category: string;

}