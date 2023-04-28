import { Field, InputType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType()
export class QueryAndFilterInput {
  @IsOptional()
  @Field(() => Number, { nullable: true })
  limit: number;

  @IsOptional()
  @Field(() => Number, { nullable: true })
  offset: number;

  @IsOptional()
  @Field(() => String, { nullable: true })
  query: string;
}
