import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LoggedInUserData {
  @Field()
  refreshTokenExpires: Date;

  @Field()
  accessTokenExpires: Date;

  @Field({ nullable: true, defaultValue: '' })
  firstName: string;

  @Field({ nullable: true, defaultValue: '' })
  lastName: string;

  @Field()
  email: string;
}
