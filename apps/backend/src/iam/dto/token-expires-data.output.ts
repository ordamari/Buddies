import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TokenExpiresData {
  @Field()
  refreshTokenExpires: Date;

  @Field()
  accessTokenExpires: Date;
}
