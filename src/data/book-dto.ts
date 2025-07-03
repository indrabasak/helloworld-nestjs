import { IsInt, IsString } from 'class-validator';

export class BookDto {
  @IsInt()
  readonly id: number;

  @IsString()
  readonly title: string;

  @IsString()
  readonly author: string;
}
