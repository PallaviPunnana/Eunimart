import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CompartmentModule } from 'src/compartment/compartment.module';
import { WarehouseController } from './controller/warehouse/warehouse.controller';
import { Warehouse } from './model/warehouse.schema';


@Module({
    imports: [SequelizeModule.forFeature([Warehouse]), CompartmentModule],
    controllers: [WarehouseController]
})
export class WarehouseModule {}
