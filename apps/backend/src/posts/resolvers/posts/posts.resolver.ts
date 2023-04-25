import { Inject, ParseIntPipe } from '@nestjs/common';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ActiveUser } from 'src/iam/decorators/active-user.decorator';
import { ActiveUserData } from 'src/iam/interfaces/active-user-data.interface';
import { CreatePostInput } from 'src/posts/dto/create-post.input';
import { UpdatePostInput } from 'src/posts/dto/update-post.input';
import { Post } from 'src/posts/entities/post.entity';
import { PostsService } from 'src/posts/services/posts/posts.service';

@Resolver()
export class PostsResolver {
  @Inject(PostsService) private readonly postsService!: PostsService;

  @Query(() => [Post], { name: 'posts' })
  async findAll() {
    return this.postsService.findAll();
  }

  @Query(() => Post, { name: 'post' })
  async findOne(@Args('id', { type: () => ID }, ParseIntPipe) id: number) {
    return this.postsService.findOne(id);
  }

  @Mutation(() => Post, { name: 'createPost' })
  async create(
    @Args('createPostInput') createPostInput: CreatePostInput,
    @ActiveUser() activeUserData: ActiveUserData,
  ) {
    return this.postsService.create(createPostInput, activeUserData.sub);
  }

  @Mutation(() => Post, { name: 'updatePost' })
  async update(
    @Args('id', { type: () => ID }, ParseIntPipe) id: number,
    @Args('updatePostInput') updatePostInput: UpdatePostInput,
  ) {
    return this.postsService.update(id, updatePostInput);
  }

  @Mutation(() => Post, { name: 'removePost' })
  async remove(@Args('id', { type: () => ID }, ParseIntPipe) id: number) {
    return this.postsService.remove(id);
  }
}
