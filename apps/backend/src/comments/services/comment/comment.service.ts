import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from 'src/comments/entities/comment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) {}

  // create(postId: number, createCommentInput: any) {
  //   const comment = this.commentRepository.create({
  //     ...createCommentInput,
  //     post: {
  //       id: postId,
  //     },
  //   });
  //   return this.commentRepository.save(comment);
  // }

  /**
   * Get all comments for a post
   * @param postId The id of the post
   * @returns All comments for the post
   */
  async getCommentsByPostId(postId: number): Promise<Comment[]> {
    return this.commentRepository.find({
      where: {
        post: {
          id: postId,
        },
      },
    });
  }
}
