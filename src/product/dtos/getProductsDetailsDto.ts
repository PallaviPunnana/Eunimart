import {ApiProperty} from '@nestjs/swagger';

export class GetProductsDto {
    @ApiProperty()
    category: string;
}