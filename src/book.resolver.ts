import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Book, CreateBookInput } from './book.model';
import { v4 as uuid } from 'uuid';

@Resolver(Book)
export class BookResolver {
  private _books: Book[] = [
    {
      id: uuid(),
      title: 'Book1',
      author: 'John Doe',
    },
    {
      id: uuid(),
      title: 'Book2',
      author: 'Jane Doe',
    },
  ];

  @Query(() => [Book])
  books(): Book[] {
    return this._books;
  }

  @Mutation(() => Book)
  createBook(@Args('input') input: CreateBookInput): Book {
    const book = {
      id: uuid(),
      ...input,
    };
    this._books.push(book);
    return book;
  }
}
