import { Test, TestingModule } from '@nestjs/testing';
import { CompartmentController } from './compartment.controller';

describe('CompartmentController', () => {
  let controller: CompartmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompartmentController],
    }).compile();

    controller = module.get<CompartmentController>(CompartmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
