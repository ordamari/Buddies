import { Test, TestingModule } from '@nestjs/testing';
import { MediaFileController } from './media-file.controller';

describe('MediaFileController', () => {
  let controller: MediaFileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MediaFileController],
    }).compile();

    controller = module.get<MediaFileController>(MediaFileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
