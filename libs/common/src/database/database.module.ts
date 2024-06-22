import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://sleepr:cwf5ZGfRietVz9ha@cluster0.rgbf72l.mongodb.net/',
    ),
  ],
})
export class DatabaseModule {}
