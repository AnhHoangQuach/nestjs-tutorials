import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostController } from './controllers/post.controller';
import { PostSchema } from './models/post.model';
import { PostService } from './services/post.service';
import { PostRepository } from './repositories/post.repository';
import { UserModule } from '../user/user.module';
import { CategorySchema } from './models/category.model';
import { CategoryController } from './controllers/category.controller';
import { CategoryRepository } from './repositories/category.repository';
import { CategoryService } from './services/category.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Post',
        schema: PostSchema,
      },
      {
        name: 'Category',
        schema: CategorySchema,
      },
    ]),
    UserModule,
  ],
  controllers: [PostController, CategoryController],
  providers: [PostService, PostRepository, CategoryRepository, CategoryService],
})
export class PostModule {}
