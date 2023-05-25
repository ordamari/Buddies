import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import cloudinaryConfig from 'src/cloudinary/config/cloudinary.config';
import { CloudinaryService } from 'src/cloudinary/services/cloudinary/cloudinary.service';
import { MediaFile } from './entities/media-file.entity';
import { MediaFileService } from './services/media-file/media-file.service';
import { MediaFileController } from './controllers/media-file/media-file.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([MediaFile]),
    ConfigModule.forFeature(cloudinaryConfig),
  ],
  providers: [MediaFileService, CloudinaryService],
  controllers: [MediaFileController],
})
export class MediaFileModule {}
