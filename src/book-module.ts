import { Module } from '@nestjs/common';
import { BookController } from './controller/book-controller.js';
import { BookService } from './service/book-service.js';

@Module({
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
