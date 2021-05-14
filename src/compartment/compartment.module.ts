import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CompartmentController } from './controller/compartment/compartment.controller';
import { Compartment } from './model/compartment.schema';
import { ProductCompartment } from './model/product-compartment.schema';
import { CompartmentService } from './service/compartment/compartment.service';

@Module({
  imports: [SequelizeModule.forFeature([Compartment, ProductCompartment])],
  controllers: [CompartmentController],
  providers: [CompartmentService],
  exports: [CompartmentService]
})
export class CompartmentModule {}
