import { UserInputError } from '@nestjs/apollo';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommentService } from 'src/comments/services/comment/comment.service';
import { CreatePostInput } from 'src/posts/dto/create-post.input';
import { UpdatePostInput } from 'src/posts/dto/update-post.input';
import { Post } from 'src/posts/entities/post.entity';
import { UsersService } from 'src/users/services/users/users.service';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
  @InjectRepository(Post)
  private readonly postRepository!: Repository<Post>;

  @Inject(CommentService)
  private readonly commentService!: CommentService;

  @Inject(UsersService)
  private readonly userService!: UsersService;

  async findAll() {
    const posts = await this.postRepository.find({ relations: ['creator'] });
    const postWithComments = await Promise.all(
      posts.map(async (post) => {
        const comments = await this.commentService.getCommentsByPostId(post.id);
        return {
          ...post,
          comments,
        };
      }),
    );
    return postWithComments;
  }

  async findOne(id: number) {
    const post = await this.postRepository.findOne({
      where: { id },
      relations: ['creator'],
    });
    const comments = await this.commentService.getCommentsByPostId(id);
    if (!post) throw new UserInputError(`Post with id ${id} not found`);
    return {
      ...post,
      comments,
    };
  }

  async create(createPostInput: CreatePostInput, creatorId: number) {
    const creator = await this.userService.findById(creatorId);
    const post = this.postRepository.create({
      ...createPostInput,
      comments: [],
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
