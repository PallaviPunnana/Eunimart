import { Table, Column, DataType, Model, HasMany, BelongsToMany } from "sequelize-typescript";
import { Archive, ArchiveInterface } from "src/archives/model/archive.schema";
import { Compartment } from "src/compartment/model/compartment.schema";
import { ProductCompartment } from "src/compartment/model/product-compartment.schema";

@Table
export class Product extends Model<Product> implements ProductInterface {
    @Column({
        primaryKey: true,
        autoIncrement: true
    })
    skuId: number;
    @Column({
        type: DataType.TEXT,
        allowNull: false
    })
    title: string;
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    price: number;
    @Column({
        type: DataType.TEXT,
        allowNull: false
    })
    category: string;
    @HasMany(() => Archive)
    logs: Archive[];
    @BelongsToMany(() => Compartment, () => ProductCompartment)
    compartments: Compartment[]
}

export interface ProductInterface {
    skuId: number;
    title: string;
    price: number;
    category: string;
    logs: any;
    compartments: any;
}