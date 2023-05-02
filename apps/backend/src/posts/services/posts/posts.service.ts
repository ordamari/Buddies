import { UserInputError } from '@nestjs/apollo';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostInput } from 'src/posts/dto/create-post.input';
import { UpdatePostInput } from 'src/posts/dto/update-post.input';
import { Post } from 'src/posts/entities/post.entity';
import { UsersService } from 'src/users/services/users/users.service';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
  @InjectRepository(Post)
  private readonly postRepository!: Repository<Post>;

  @Inject(UsersService)
  private readonly userService!: UsersService;

  async findAll() {
    const posts = await this.postRepository.find({
      relations: [
        'creator',
        'comments',
        'comments.creator',
        'reactions',
        'reactions.creator',
      ],
    });
    return posts;
  }

  async findOne(id: number) {
    const post = await this.postRepository.findOne({
      where: { id },
      relations: [
        'creator',
        'comments',
        'comments.creator',
        'reactions',
        'reactions.creator',
      ],
    });
    if (!post) throw new UserInputError(`Post with id ${id} not found`);
    return post;
  }

  async create(createPostInput: CreatePostInput, creatorId: number) {
    const creator = await this.userService.findById(creatorId);
    const post = this.postRepository.create({
      ...createPostInput,
      comments: [],
      reactions: [],
      creator,
    });
    return this.postRepository.save(post);
  }

  async update(id: number, updatePostInput: UpdatePostInput) {
    const post = await this.postRepository.preload({
      id,
      ...updatePostInput,
    });
    if (!post) throw new UserInputError(`Post with id ${id} not found`);
    return this.postRepository.save(post);
  }

  async remove(id: number) {
    const post = await this.findOne(id);
    return this.postRepository.remove(post);
  }
}
