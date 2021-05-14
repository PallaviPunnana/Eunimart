import { Table, Column, DataType, Model, ForeignKey, HasOne, HasMany, BelongsTo, BelongsToMany } from "sequelize-typescript";
import { Product } from "src/product/model/product.schema";
import { Warehouse } from "src/warehouse/model/warehouse.schema";
import { ProductCompartment } from "./product-compartment.schema";

@Table
  export class Compartment extends Model<Compartment> implements CompartmentInterface { 
    @Column({
      primaryKey: true,
      autoIncrement: true
    })
    compartmentId: number;
    @Column({
      type: DataType.INTEGER
    })
    skuId: number;
    @ForeignKey(() => Warehouse)
    @Column({
      type: DataType.INTEGER
    })
    warehouseId: number;
    @BelongsTo(() => Warehouse)
    warehouse: Warehouse;
    @Column({
      type: DataType.TEXT,
      allowNull: false,
      values: ['Available', 'Restored', 'Damaged']
    })
    compartmentName: string;
    @Column({
      type: DataType.INTEGER,
      allowNull: false
    })
    quantity: number;
    @BelongsToMany(() => Product, () => ProductCompartment)
    product: Product[]
}

export interface CompartmentInterface {
    compartmentId: number;
    compartmentName: string;
    warehouseId: number;
    skuId: number;
    quantity: number;
}