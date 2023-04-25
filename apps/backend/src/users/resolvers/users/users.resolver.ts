import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ActiveUser } from 'src/iam/decorators/active-user.decorator';
import { ActiveUserData } from 'src/iam/interfaces/active-user-data.interface';
import { User } from 'src/users/entities/user.entity';
// import GraphQLUpload from 'graphql-upload/GraphQLUpload.mjs';
// import { FileUpload } from 'graphql-upload/processRequest.mjs';
import { GraphQLUpload, FileUpload } from 'graphql-upload';

@Resolver()
export class UsersResolver {
  @Mutation(() => User, { name: 'updateProfileImage' })
  async update(
    @ActiveUser() activeUser: ActiveUserData,
    @Args('file', { type: () => GraphQLUpload })
    { createReadStream, filename }: FileUpload,
  ) {
    createReadStream().pipe();
    // return this.postsService.update(id, updatePostInput);
  }
}
