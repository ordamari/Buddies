import { UserInputError } from '@nestjs/apollo';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CloudinaryService } from 'src/cloudinary/services/cloudinary/cloudinary.service';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { FileUpload } from 'graphql-upload';
import { QueryAndFilterInput } from 'src/common/query-and-filter.input';

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
        friends: [],
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
    profileImageUrl: string,
  ): Promise<User> {
    try {
      const user = this.userRepository.create({
        email,
        googleId,
        firstName,
        lastName,
        profileImageUrl,
        posts: [],
        friends: [],
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
    const user = await this.userRepository.findOne({
      where: { id },
      relations: ['posts', 'friends'],
    });
    if (!user) return null;
    return user;
  }

  async findByGoogleId(googleId: string): Promise<User | null> {
    const user = await this.userRepository.findOne({ where: { googleId } });
    if (!user) return null;
    return user;
  }

  async updateProfileImageUrl(userId: number, fileUpload: FileUpload) {
    const res = await this.cloudinaryService.uploadImage(fileUpload);
    if (res.error) throw new UserInputError(res.error.message);
    const user = await this.userRepository.preload({
      id: userId,
      profileImageUrl: res.secure_url,
    });
    if (!user) throw new UserInputError('User not found');
    return this.userRepository.save(user);
  }

  async updateCoverImageUrl(userId: number, fileUpload: FileUpload) {
    const res = await this.cloudinaryService.uploadImage(fileUpload);
    if (res.error) throw new UserInputError(res.error.message);
    const user = await this.userRepository.preload({
      id: userId,
      coverImageUrl: res.secure_url,
    });
    if (!user) throw new UserInputError('User not found');
    return this.userRepository.save(user);
  }

  async addFriend(userId: number, friendId: number) {
    const user = await this.findById(userId);
    if (!user) throw new UserInputError('User not found');
    const friend = await this.findById(friendId);
    if (!friend) throw new UserInputError('Friend not found');
    user.friends.push(friend);
    friend.friends.push(user);
    await this.userRepository.save(friend);
    return this.userRepository.save(user);
  }

  async findByQuery(queryAndFilter: QueryAndFilterInput, userId: number) {
    const { query, offset, limit } = queryAndFilter;
    console.log({ userId });

    const users = await this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.friends', 'friend')
      .where(
        '(LOWER(user.firstName) LIKE :searchString OR LOWER(user.lastName) LIKE :searchString)',
        {
          searchString: `%${query.toLowerCase()}%`,
        },
      )
      .andWhere('user.id != :userId', { userId: userId.toString() })
      .skip(offset)
      .take(limit)
      .getMany();
    return users;
  }
}
