import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ArchivesModule } from 'src/archives/archives.module';
import { CompartmentModule } from 'src/compartment/compartment.module';
import { CompartmentService } from 'src/compartment/service/compartment/compartment.service';
import { ProductController } from './controller/product/product.controller';
import { Product } from './model/product.schema';
import { ProductService } from './service/product/product.service';

@Module({
  imports: [SequelizeModule.forFeature([Product]), CompartmentModule, ArchivesModule],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
