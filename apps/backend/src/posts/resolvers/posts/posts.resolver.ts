import { Inject, ParseIntPipe } from '@nestjs/common';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreatePostInput } from 'src/posts/dto/create-post.input';
import { UpdatePostInput } from 'src/posts/dto/update-post.input';
import { Post } from 'src/posts/entities/post.entity';
import { PostsService } from 'src/posts/services/posts/posts.service';

@Resolver()
export class PostsResolver {
  @Inject(PostsService) private readonly postsService!: PostsService;

  /**
   * @returns All posts
   */
  @Query(() => [Post], { name: 'posts' })
  async findAll() {
    return this.postsService.findAll();
  }

  /**
   * @param id The ID of the post
   * @returns The post with the given ID
   */
  @Query(() => Post, { name: 'post' })
  async findOne(@Args('id', { type: () => ID }, ParseIntPipe) id: number) {
    return this.postsService.findOne(id);
  }

  /**
   * @param createPostInput The input for creating a post
   * @returns The created post
   */
  @Mutation(() => Post, { name: 'createPost' })
  async create(@Args('createPostInput') createPostInput: CreatePostInput) {
    return this.postsService.create(createPostInput);
  }

  /**
   * @param id The ID of the post
   * @param updatePostInput The input for updating a post
   * @returns The updated post
   */
  @Mutation(() => Post, { name: 'updatePost' })
  async update(
    @Args('id', { type: () => ID }, ParseIntPipe) id: number,
    @Args('updatePostInput') updatePostInput: UpdatePostInput,
  ) {
    return this.postsService.update(id, updatePostInput);
  }

  /**
   * @param id The ID of the post
   * @returns The deleted post
   */
  @Mutation(() => Post, { name: 'removePost' })
  async remove(@Args('id', { type: () => ID }, ParseIntPipe) id: number) {
    return this.postsService.remove(id);
  }
}
