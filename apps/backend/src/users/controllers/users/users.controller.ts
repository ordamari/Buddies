import {
  Controller,
  Inject,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ActiveUser } from 'src/iam/decorators/active-user.decorator';
import { ActiveUserData } from 'src/iam/interfaces/active-user-data.interface';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  @Inject()
  private readonly usersService!: UsersService;

  @Post('update-profile-image')
  @UseInterceptors(FileInterceptor('file'))
  async updateProfileImage(
    @ActiveUser() activeUserData: ActiveUserData,
    // @UploadedFile() file: Express.Multer.File,
  ) {
    console.log(activeUserData);

    // return this.usersService.updateProfileImageUrl(activeUserData.sub, file);
  }
}
