import {ApiProperty} from '@nestjs/swagger';

export class GetProductDto {
    @ApiProperty()
    skuId: number;
}