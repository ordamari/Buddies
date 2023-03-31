import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { ParseIntPipe } from '@nestjs/common';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  /**
   * @param createUserInput The input for creating a user
   * @returns The created user
   */
  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  /**
   * @returns All users
   */
  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  /**
   * @param id The id of the user
   * @returns The user with the given id
   */
  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.findOne(id);
  }

  /**
   * @param id The id of the user
   * @param updateUserInput The input for updating a user
   * @returns Updated user
   */
  @Mutation(() => User)
  updateUser(
    @Args('id', { type: () => ID }, ParseIntPipe) id: number,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ) {
    return this.usersService.update(id, updateUserInput);
  }

  /**
   * @param id The id of the user
   * @returns The deleted user
   */
  @Mutation(() => User)
  removeUser(@Args('id', { type: () => ID }, ParseIntPipe) id: number) {
    return this.usersService.remove(id);
  }
}
