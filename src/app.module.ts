import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WarehouseModule } from './warehouse/warehouse.module';
import { ProductModule } from './product/product.module';
import { CompartmentModule } from './compartment/compartment.module';
import { ArchivesModule } from './archives/archives.module';
import { SequelizeModule } from '@nestjs/sequelize';
@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    database: 'ims',
    username: 'root',
    password: 'root',
    autoLoadModels: true,
  }),
    WarehouseModule, ProductModule, CompartmentModule, ArchivesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
