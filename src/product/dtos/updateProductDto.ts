import {ApiProperty} from '@nestjs/swagger';

export class UpdateCompartmentDto {
    @ApiProperty()
    skuId: number;
    @ApiProperty()
    compartmentId: string;
    @ApiProperty()
    quantity: number;
    @ApiProperty()
    operation: string;
}
