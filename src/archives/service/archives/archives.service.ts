import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Archive } from 'src/archives/model/archive.schema';

@Injectable()
export class ArchivesService {
    constructor(
        @InjectModel(Archive)
            private readonly model: typeof Archive
        ) {}
    async getArchive(skuId: number) {
        return (await this.model.findAll({where: {skuId}})).map(record => record.get({plain: true}));
    }
    async logArchive(archiveObject) {
        await this.model.create(archiveObject);
    }
}
