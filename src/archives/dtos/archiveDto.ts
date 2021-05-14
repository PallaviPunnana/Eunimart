import {ApiProperty} from '@nestjs/swagger';

export class ArchiveDto {
    @ApiProperty()
    skuId: number;
}