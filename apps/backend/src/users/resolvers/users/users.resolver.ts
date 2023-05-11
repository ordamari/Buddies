import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ActiveUser } from 'src/iam/decorators/active-user.decorator';
import { ActiveUserData } from 'src/iam/interfaces/active-user-data.interface';
import { User } from 'src/users/entities/user.entity';
import { GraphQLUpload, FileUpload } from 'graphql-upload';
import { UsersService } from 'src/users/services/users/users.service';
import { Inject, ParseIntPipe } from '@nestjs/common';
import { UserInputError } from '@nestjs/apollo';
import { PaginatorFilterInput } from 'src/common/dto/paginator-filter.input';

@Resolver()
export class UsersResolver {
  @Inject(UsersService) private readonly usersService!: UsersService;

  @Query(() => User, { name: 'loggedInUser' })
  async findLoggedInUser(@ActiveUser() activeUser: ActiveUserData) {
    const user = await this.usersService.findById(activeUser.sub);
    if (!user) throw new UserInputError('User not found');
    return user;
  }

  @Query(() => [User], { name: 'users' })
  async findByQuery(
    @ActiveUser() activeUser: ActiveUserData,
    @Args('queryAndFilter') queryAndFilter: PaginatorFilterInput,
  ) {
    return this.usersService.findByQuery(queryAndFilter, activeUser.sub);
  }

  @Query(() => User, { name: 'user' })
  async findById(@Args('id', { type: () => ID }, ParseIntPipe) id: number) {
    return this.usersService.findById(id);
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
  async updateCoverImage(
    @ActiveUser() activeUser: ActiveUserData,
    @Args('file', { type: () => GraphQLUpload })
    fileUpload: FileUpload,
  ) {
    return this.usersService.updateCoverImageUrl(activeUser.sub, fileUpload);
  }

  // TODO: Change this to send friend request
  @Mutation(() => User, { name: 'addFriend' })
  async addFriend(
    @ActiveUser() activeUser: ActiveUserData,
    @Args('friendId', { type: () => ID }, ParseIntPipe) id: number,
  ) {
    return this.usersService.addFriend(activeUser.sub, id);
  }
}
