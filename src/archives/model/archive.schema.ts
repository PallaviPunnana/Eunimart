import { Table, Column, DataType, Model, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Product } from "src/product/model/product.schema";

@Table
  export class Archive extends Model<Archive> implements ArchiveInterface { 
    @Column({
      primaryKey: true,
      autoIncrement: true
    })
    logId: number;
    @ForeignKey(() => Product)
    @Column({
      type: DataType.INTEGER
    })
    skuId: number;
    @BelongsTo(() => Product)
    product: Product;
    @Column({
      type: DataType.INTEGER
    })
    compartmentId: number;
    @Column({
      type: DataType.INTEGER
    })
    warehouseId: number;
    @Column({
      type: DataType.TEXT,
      allowNull: false
    })
    action: string;
    @Column({
      type: DataType.INTEGER,
      allowNull: false
    })
    quantity: number;
    @Column({
      type: DataType.INTEGER,
      allowNull: false
    })
    before: number;
    @Column({
        type: DataType.INTEGER,
        allowNull: false
      })
    after: number;
}

export interface ArchiveInterface {
    logId: number;
    skuId: number;
    compartmentId: number;
    warehouseId: number;
    action: string;
    quantity: number;
    before: number;
    after: number
}