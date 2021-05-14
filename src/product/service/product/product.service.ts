import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product, ProductInterface } from 'src/product/model/product.schema';

@Injectable()
export class ProductService {
    constructor(
    @InjectModel(Product)
        private readonly model: typeof Product
    ) {}
    async createProduct(product) {
        await this.model.create(product)
    }
    async getProduct(id: number) {
        return (await this.model.findOne({where: {skuId: id}}))?.get({plain: true});
    }
    async getProductByCategory(category: string) {
        return (await this.model.findAll({where: {category}})).map(record => record.get({plain: true}));
    }
}
