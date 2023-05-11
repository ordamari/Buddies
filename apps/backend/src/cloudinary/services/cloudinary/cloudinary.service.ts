import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';
import cloudinaryConfig from 'src/cloudinary/config/cloudinary.config';
import { FileUpload } from 'graphql-upload';

@Injectable()
export class CloudinaryService {
  constructor(
    @Inject(cloudinaryConfig.KEY)
    private cloudinaryConfiguration: ConfigType<typeof cloudinaryConfig>,
  ) {
    v2.config({
      cloud_name: this.cloudinaryConfiguration.cloudName,
      api_key: this.cloudinaryConfiguration.apiKey,
      api_secret: this.cloudinaryConfiguration.apiSecret,
    });
  }

  async uploadImage(
    fileUpload: FileUpload,
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    return new Promise((resolve, reject) => {
      const upload = v2.uploader.upload_stream((error, result) => {
        if (error) return reject(error);
        resolve(result);
      });
      fileUpload.createReadStream().pipe(upload);
    });
  }

  async deleteImage(publicId: string) {
    return v2.uploader.destroy(publicId);
  }
}
