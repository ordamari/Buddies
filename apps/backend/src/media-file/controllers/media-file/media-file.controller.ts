import { Controller, Get, Inject, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { Auth } from 'src/iam/decorators/auth.decorator';
import { AuthType } from 'src/iam/enums/auth-type.enum';
import { MediaFileService } from 'src/media-file/services/media-file/media-file.service';

@Auth(AuthType.None)
@Controller('media-file')
export class MediaFileController {
  @Inject(MediaFileService)
  private readonly mediaFileService!: MediaFileService;
  @Get(':identifier')
  async getMediaFile(
    @Param('identifier') identifier: string,
    @Res() res: Response,
  ) {
    const { data, mimeType } = await this.mediaFileService.getFile(identifier);
    const img = Buffer.from(data, 'base64');
    res.writeHead(200, {
      'Content-Type': mimeType as string,
      'Content-Length': img.length,
    });
    res.end(img);
  }
}
