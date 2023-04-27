import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ActiveUser } from 'src/iam/decorators/active-user.decorator';
import { ActiveUserData } from 'src/iam/interfaces/active-user-data.interface';
import { User } from 'src/users/entities/user.entity';
import { GraphQLUpload, FileUpload } from 'graphql-upload';
import { UsersService } from 'src/users/services/users/users.service';
import { Inject } from '@nestjs/common';
import { UserInputError } from '@nestjs/apollo';

@Resolver()
export class UsersResolver {
  @Inject(UsersService) private readonly usersService!: UsersService;

  @Query(() => User, { name: 'loggedInUser' })
  async findLoggedInUser(@ActiveUser() activeUser: ActiveUserData) {
    const user = await this.usersService.findById(activeUser.sub);
    if (!user) throw new UserInputError('User not found');
    return user;
  }

  @Mutation(() => User, { name: 'updateProfileImage' })
  async updateProfileImage(
    @ActiveUser() activeUser: ActiveUserData,
    @Args('file', { type: () => GraphQLUpload })
    fileUpload: FileUpload,
  ) {
    return this.usersService.updateProfileImageUrl(activeUser.sub, fileUpload);
  }

  @Mutation(() => User, { name: 'updateCoverImage' })
  async update(
    @ActiveUser() activeUser: ActiveUserData,
    @Args('file', { type: () => GraphQLUpload })
    fileUpload: FileUpload,
  ) {
    return this.usersService.updateCoverImageUrl(activeUser.sub, fileUpload);
  }
}
