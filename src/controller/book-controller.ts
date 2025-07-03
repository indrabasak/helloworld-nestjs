import { BookService } from '../service/book-service.js';
import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { BookDto } from '../data/book-dto.js';
import { Book } from '../data/book.js';

@Controller('books')
export class BookController {
  constructor(private service: BookService) {}

  @Post()
  async create(@Body() dto: BookDto) {
    this.service.create(dto);
  }

  @Get()
  async readAll(): Promise<Book[]> {
    return this.service.readAll();
  }

  @Get(':id')
  read(@Param('id', new ParseIntPipe()) id: number) {
    return this.service.read(id);
  }
}
