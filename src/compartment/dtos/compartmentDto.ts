import {ApiProperty} from '@nestjs/swagger';

export class CompartmentDto {
    @ApiProperty()
    compartmentName: string;
    @ApiProperty()
    warehouseId: number;
    @ApiProperty()
    skuId: number;
    @ApiProperty()
    quantity: number;

}