import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { ArchivesService } from 'src/archives/service/archives/archives.service';

@Controller('archives')
export class ArchivesController {
    constructor(
        private readonly archiveService: ArchivesService
    ) {}
    @Get('details')
    async getCompartmentWiseDetails(
        @Query() id: number,
        @Res() res
    ) {
        try {
            const details = await this.archiveService.getArchive(id);
            res.status(HttpStatus.OK).send({data: details});
        } catch (e) {
            console.log(e);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({message: 'Problem at our side. Please try again later'});
        }
    }
}
