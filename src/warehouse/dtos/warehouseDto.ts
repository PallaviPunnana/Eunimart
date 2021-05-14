import {ApiProperty} from '@nestjs/swagger';

export class WarehouseDto {
    @ApiProperty()
    skuId: number;
    @ApiProperty()
    compartmentId: number;
}
