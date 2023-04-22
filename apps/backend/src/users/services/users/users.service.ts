import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  @InjectRepository(User)
  private readonly userRepository!: Repository<User>;

  create(
    email: string,
    encryptedPassword: string,
    firstName: string,
    lastName: string,
  ): Promise<User> {
    try {
      const user = this.userRepository.create({
        email,
        password: encryptedPassword,
        firstName,
        lastName,
      });
      return this.userRepository.save(user);
    } catch (err) {
      throw err;
    }
  }

  createFromGoogle(
    email: string,
    googleId: string,
    firstName: string,
    lastName: string,
  ): Promise<User> {
    try {
      const user = this.userRepository.create({
        email,
        googleId,
        firstName,
        lastName,
      });
      return this.userRepository.save(user);
    } catch (err) {
      throw err;
    }
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.userRepository.findOneBy({
      email,
    });
    if (!user) return null;
    return user;
  }

  async findById(id: number): Promise<User | null> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) return null;
    return user;
  }

  async findByGoogleId(googleId: string): Promise<User | null> {
    const user = await this.userRepository.findOne({ where: { googleId } });
    if (!user) return null;
    return user;
  }
}
