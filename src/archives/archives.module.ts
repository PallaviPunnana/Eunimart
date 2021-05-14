import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ArchivesController } from './controller/archives/archives.controller';
import { Archive } from './model/archive.schema';
import { ArchivesService } from './service/archives/archives.service';

@Module({
  imports: [SequelizeModule.forFeature([Archive])],
  controllers: [ArchivesController],
  providers: [ArchivesService],
  exports: [ArchivesService]
})
export class ArchivesModule {}
