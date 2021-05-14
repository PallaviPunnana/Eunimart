import { Test, TestingModule } from '@nestjs/testing';
import { CompartmentService } from './compartment.service';

describe('CompartmentService', () => {
  let service: CompartmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompartmentService],
    }).compile();

    service = module.get<CompartmentService>(CompartmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
