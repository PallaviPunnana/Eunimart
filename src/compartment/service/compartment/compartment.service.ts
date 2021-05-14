import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize';
import { Compartment } from 'src/compartment/model/compartment.schema';

@Injectable()
export class CompartmentService {
    constructor(
        @InjectModel(Compartment)
        private readonly model: typeof Compartment
    ) { }
    async createCompartment(compartment) {
        await this.model.create(compartment);
    }
    async getCompartmentDetails(compartmentId) {
        return (await this.model.findOne({where: {compartmentId}})).get({plain: true});
    }
    async updateQuantity(compartmentId, skuId, quantityMargin, operation) {        
        let existingQuantity = (await this.getCompartmentDetails(compartmentId)).quantity;
        let quantityValue = ((operation === 'add')? (existingQuantity + quantityMargin): (existingQuantity - quantityMargin));
        await this.model.update({quantity: quantityValue}, {where: {skuId, compartmentId}})
    }
    async getCompartmentWiseData() {
        return await this.model.findAll({
            attributes: ['categoryName', 'skuId', [Sequelize.fn('COUNT', 'quantity'), 'products']],
            group: ['categoryName','skuId']})
    }
    async getWarehouseWiseData() {
        return await this.model.findAll({
            attributes: ['warehouseId', 'categoryName', 'skuId', [Sequelize.fn('COUNT', 'quantity'), 'products']],
            group: ['warehouseId', 'categoryName', 'skuId']
        })
    }
}
