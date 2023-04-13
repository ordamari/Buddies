import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TokenExpiresData {
  /**
   * @description The refresh token expiration date
   */
  @Field()
  refreshTokenExpires: Date;

  /**
   * @description The access token expiration date
   */
  @Field()
  accessTokenExpires: Date;
}
