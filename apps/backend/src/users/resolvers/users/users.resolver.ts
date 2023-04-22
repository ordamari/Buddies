import { Resolver } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/services/users/users.service';

@Resolver(() => User)
export class UsersResolver {
  @Inject()
  private readonly usersService!: UsersService;
}
