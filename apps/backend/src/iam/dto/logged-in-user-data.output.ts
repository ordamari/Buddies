import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LoggedInUserData {
  @Field()
  refreshTokenExpires: Date;

  @Field()
  accessTokenExpires: Date;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;
}
