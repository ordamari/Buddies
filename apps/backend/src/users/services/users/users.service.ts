import { UserInputError } from '@nestjs/apollo';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CloudinaryService } from 'src/cloudinary/services/cloudinary/cloudinary.service';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  @InjectRepository(User)
  private readonly userRepository!: Repository<User>;
  @Inject(CloudinaryService)
  private readonly cloudinaryService!: CloudinaryService;

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
        posts: [],
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
        posts: [],
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

  async updateProfileImageUrl(userId: number, file: Express.Multer.File) {
    const res = await this.cloudinaryService.uploadImage(file);
    if (res.error) throw new UserInputError(res.error.message);
    const user = await this.userRepository.preload({
      id: userId,
      profileImageUrl: res.secure_url,
    });
    if (!user) throw new UserInputError('User not found');
    return this.userRepository.save(user);
  }
}
