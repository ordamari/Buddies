import { UserInputError } from '@nestjs/apollo';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommentService } from 'src/comments/services/comment/comment.service';
import { CreatePostInput } from 'src/posts/dto/create-post.input';
import { UpdatePostInput } from 'src/posts/dto/update-post.input';
import { Post } from 'src/posts/entities/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
  @InjectRepository(Post)
  private readonly postRepository!: Repository<Post>;

  @Inject(CommentService)
  private readonly commentService!: CommentService;

  /**
   * @description Finds all posts
   * @returns All posts
   */
  async findAll() {
    const posts = await this.postRepository.find();
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
  /**
   * @description Finds a post by ID
   * @param id The ID of the post
   * @returns The post with the given ID
   */
  async findOne(id: number) {
    const post = await this.postRepository.findOne({ where: { id } });
    const comments = await this.commentService.getCommentsByPostId(id);
    if (!post) throw new UserInputError(`Post with id ${id} not found`);
    return {
      ...post,
      comments,
    };
  }

  /**
   * @description Creates a post
   * @param createPostInput The input for creating a post
   * @returns The created post
   */
  async create(createPostInput: CreatePostInput) {
    const post = this.postRepository.create(createPostInput);
    return this.postRepository.save(post);
  }

  /**
   * @description Updates a post
   * @param id The ID of the post
   * @param updatePostInput The input for updating a post
   * @returns The updated post
   */
  async update(id: number, updatePostInput: UpdatePostInput) {
    const post = await this.postRepository.preload({
      id,
      ...updatePostInput,
    });
    if (!post) throw new UserInputError(`Post with id ${id} not found`);
    return this.postRepository.save(post);
  }

  /**
   * @description Deletes a post
   * @param id The ID of the post
   * @returns The deleted post
   */
  async remove(id: number) {
    const post = await this.findOne(id);
    return this.postRepository.remove(post);
  }
}
