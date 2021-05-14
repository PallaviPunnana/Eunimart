import { Column, ForeignKey, Model, Table } from "sequelize-typescript"
import { Product } from "src/product/model/product.schema"
import { Compartment } from "./compartment.schema"

@Table
export class ProductCompartment extends Model {
  @ForeignKey(() => Product)
  @Column
  skuId: number

  @ForeignKey(() => Compartment)
  @Column
  compartmentId: number
}