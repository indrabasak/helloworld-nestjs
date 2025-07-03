import { Injectable } from '@nestjs/common';
import { Book } from '../data/book.js';

@Injectable()
export class BookService {
  private readonly books = new Map<number, Book>();

  create(book: Book) {
    this.books.set(book.id, book);
  }

  readAll(): Book[] {
    return Array.from(this.books.values());
  }

  read(id: number): Book | undefined {
    return this.books.get(id);
  }
}
