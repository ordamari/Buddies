import { Module } from '@nestjs/common';
import { FilesService } from './services/files/files.service';

@Module({
  providers: [FilesService]
})
export class FilesModule {}
