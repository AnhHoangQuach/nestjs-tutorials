import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostController } from './controllers/post.controller';
import { PostSchema } from './models/post.model';
import { PostService } from './services/post.service';
import { PostRepository } from './repositories/post.repository';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Post',
        schema: PostSchema,
      },
    ]),
    UserModule,
  ],
  controllers: [PostController],
  providers: [PostService, PostRepository],
})
export class PostModule {}
