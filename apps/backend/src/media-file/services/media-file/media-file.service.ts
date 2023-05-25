import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CloudinaryService } from 'src/cloudinary/services/cloudinary/cloudinary.service';
import { MediaFile } from 'src/media-file/entities/media-file.entity';
import { Repository } from 'typeorm';
import { FileUpload } from 'graphql-upload';
import { UserInputError } from '@nestjs/apollo';
import axios from 'axios';
import { randomUUID } from 'crypto';

@Injectable()
export class MediaFileService {
  @Inject(CloudinaryService)
  private readonly cloudinaryService!: CloudinaryService;

  @InjectRepository(MediaFile)
  private readonly mediaFileRepository!: Repository<MediaFile>;

  async uploadFile(fileUpload: FileUpload) {
    try {
      const res = await this.cloudinaryService.uploadFile(fileUpload);
      const mediaFile = this.mediaFileRepository.create({
        resource_type: res.resource_type,
        secure_url: res.secure_url,
        cloudinaryPublicId: res.public_id,
        identifier: randomUUID(),
        mimeType: fileUpload.mimetype,
      });
      await this.mediaFileRepository.save(mediaFile);
      return mediaFile.identifier;
    } catch (err) {
      throw new UserInputError("Can't upload file");
    }
  }

  async deleteFile(identifier: string) {
    try {
      const mediaFile = await this.mediaFileRepository.findOne({
        where: { identifier },
      });
      if (!mediaFile) {
        throw new UserInputError('Media file not found');
      }
      await this.cloudinaryService.deleteFile(mediaFile.cloudinaryPublicId);
      await this.mediaFileRepository.delete(mediaFile.id);
      return true;
    } catch (err) {
      throw new UserInputError("Can't delete file");
    }
  }

  async getFile(identifier: string) {
    try {
      const mediaFile = await this.mediaFileRepository.findOne({
        where: { identifier },
      });
      if (!mediaFile) {
        throw new UserInputError('Media file not found');
      }
      const response = await axios.get(mediaFile.secure_url, {
        responseType: 'arraybuffer',
      });
      return { data: response.data, mimeType: mediaFile.mimeType };
    } catch (err) {
      throw new UserInputError("Can't get file");
    }
  }

  createUrlFromIdentifier(identifier: string): string {
    return `${process.env.ADDRESS}/media-file/${identifier}`;
  }

  getIdentifierFromUrl(fileUrl: string): string | null {
    if (!fileUrl || !fileUrl.includes(process.env.ADDRESS)) return null;
    return fileUrl.split('/').pop();
  }

  getMimeType(url: string) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('HEAD', url);
      xhr.onload = () => {
        const contentType = xhr.getResponseHeader('Content-Type');
        resolve(contentType);
      };
      xhr.onerror = () => {
        reject(new Error('Error retrieving MIME type'));
      };
      xhr.send();
    });
  }
}
