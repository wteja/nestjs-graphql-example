import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { BookResolver } from './book.resolver';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
  ],
  providers: [BookResolver],
})
export class AppModule {}
