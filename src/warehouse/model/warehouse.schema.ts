import { Table, Column, DataType, Model, HasMany } from "sequelize-typescript";
import { Compartment } from "src/compartment/model/compartment.schema";

@Table
export class Warehouse extends Model<Warehouse> implements WarehouseInterface {
    @Column({
        primaryKey: true,
        autoIncrement: true
    })
    warehouseId: number;
    @Column({
        type: DataType.TEXT,
        allowNull: false
    })
    location: string;
    @Column({
        type: DataType.TEXT,
        allowNull: false
    })
    name: string;
    @HasMany(() => Compartment)
    compartment: Compartment;
}

export interface WarehouseInterface {
    warehouseId: number;
    location: string;
    name: string;
}