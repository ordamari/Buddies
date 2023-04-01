import { UserInputError } from '@nestjs/apollo';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { pgUniqueConstraintError } from 'src/common/Strings';
import { CreateUserInput } from 'src/users/dto/create-user.input';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  @InjectRepository(User)
  private readonly userRepository!: Repository<User>;

  /**
   * Create a user
   * @param createUserInput Email, and encrypted password of the user
   * @returns The created user
   */
  create(createUserInput: CreateUserInput) {
    try {
      const user = this.userRepository.create({
        ...createUserInput,
        password: createUserInput.encryptedPassword,
      });
      return this.userRepository.save(user);
    } catch (err) {
      if (err.code === pgUniqueConstraintError) {
        throw new UserInputError('This email is already in use');
      }
      throw err;
    }
  }

  /**
   * Get a user by email
   * @param email Email of the user
   * @returns The user with the given email
   */
  async findByEmail(email: string) {
    const user = await this.userRepository.findOneBy({
      email,
    });
    if (!user) {
      throw new UserInputError('This email is not registered');
    }
    return user;
  }
}
