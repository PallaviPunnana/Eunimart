import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { ArchivesService } from 'src/archives/service/archives/archives.service';
import {ApiTags} from '@nestjs/swagger';
import { ArchiveDto } from 'src/archives/dtos/archiveDto';

@ApiTags('archives')
@Controller('archives')
export class ArchivesController {
    constructor(
        private readonly archiveService: ArchivesService
    ) {}
    @Get('details')
    async getCompartmentWiseDetails(
        @Query() input: ArchiveDto,
        @Res() res
    ) {
        try {
            const details = await this.archiveService.getArchive(input.skuId);
            res.status(HttpStatus.OK).send({data: details});
        } catch (e) {
            console.log(e);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({message: 'Problem at our side. Please try again later'});
        }
    }
}
