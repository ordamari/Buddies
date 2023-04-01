import { Resolver } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/services/users/users.service';

@Resolver(() => User)
export class UsersResolver {
  @Inject()
  private readonly usersService!: UsersService;

  /**
   * @returns All users
   */
  // @Query(() => [User], { name: 'users' })
  // findAll() {
  //   return this.usersService.findAll();
  // }

  // /**
  //  * @param id The id of the user
  //  * @returns The user with the given id
  //  */
  // @Query(() => User, { name: 'user' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.usersService.findOne(id);
  // }

  // /**
  //  * @param id The id of the user
  //  * @param updateUserInput The input for updating a user
  //  * @returns Updated user
  //  */
  // @Mutation(() => User)
  // updateUser(
  //   @Args('id', { type: () => ID }, ParseIntPipe) id: number,
  //   @Args('updateUserInput') updateUserInput: UpdateUserInput,
  // ) {
  //   return this.usersService.update(id, updateUserInput);
  // }

  // /**
  //  * @param id The id of the user
  //  * @returns The deleted user
  //  */
  // @Mutation(() => User)
  // removeUser(@Args('id', { type: () => ID }, ParseIntPipe) id: number) {
  //   return this.usersService.remove(id);
  // }
}
