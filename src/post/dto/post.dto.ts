import { IsNotEmpty } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  title: string;
  description: string;
  content: string;
}

export class UpdatePostDto {
  @IsNotEmpty()
  id: string;
  content: string;
  @IsNotEmpty()
  title: string;
}
