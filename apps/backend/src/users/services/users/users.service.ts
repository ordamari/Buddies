import { UserInputError } from '@nestjs/apollo';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserInput } from 'src/users/dto/create-user.input';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  @InjectRepository(User)
  private readonly userRepository!: Repository<User>;

  create(createUserInput: CreateUserInput) {
    try {
      const user = this.userRepository.create({
        ...createUserInput,
        password: createUserInput.encryptedPassword,
      });
      return this.userRepository.save(user);
    } catch (err) {
      throw err;
    }
  }

  createFromGoogle(email: string, googleId: string) {
    try {
      const user = this.userRepository.create({
        email,
        googleId,
      });
      return this.userRepository.save(user);
    } catch (err) {
      throw err;
    }
  }

  async findByEmail(email: string) {
    const user = await this.userRepository.findOneBy({
      email,
    });
    if (!user) {
      throw new UserInputError('This email is not registered');
    }
    return user;
  }

  async findById(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new UserInputError('This email is not registered');
    }
    return user;
  }

  /**
   * This method dont return error if user not found
   * because it use to google authentication and if user not found
   * it will create a new user
   */
  async findByGoogleId(googleId: string) {
    const user = await this.userRepository.findOne({ where: { googleId } });
    return user;
  }
}
