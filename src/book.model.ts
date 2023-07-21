import { Field, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Book {
  @Field(() => String)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => String, { nullable: true })
  author?: string;
}

@InputType()
export class CreateBookInput {
  @Field(() => String)
  title: string;

  @Field(() => String, { nullable: true })
  author?: string;
}
