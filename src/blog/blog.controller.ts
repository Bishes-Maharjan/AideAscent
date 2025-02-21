import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Userdto } from 'src/dto/dto';
import { BlogService } from './blog.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
@ApiTags('Blog Crud Functionality')
@Controller('blog')
export class BlogController {
  constructor(private blogService: BlogService) {}
  //Post
  @Post('postBlog')
  @ApiOperation({ summary: 'Post Blog' })
  @ApiResponse({ status: 200, description: 'Post Blog' })
  postBlog(@Body() dto: Userdto) {
    return this.blogService.createBlog(dto);
  }
  //Get all
  @Get('getBlog')
  @ApiOperation({ summary: 'Get All Blog' })
  @ApiResponse({ status: 200, description: 'Get all blogs' })
  getBlog() {
    return this.blogService.getAllBlog();
  }
  // Get single
  @Get('getBlog/:id')
  @ApiOperation({ summary: 'Get Single Blog' })
  @ApiResponse({ status: 200, description: 'get single blog' })
  getOneBlog(@Param('id') id: string) {
    return this.blogService.getBlog(Number(id));
  }
  //Patch
  @Patch('updateBlog/:id')
  @ApiOperation({ summary: 'Update Blog' })
  @ApiResponse({ status: 200, description: 'Update Blog' })
  updateBlog(@Param('id') id: string, @Body() dto: Userdto) {
    return this.blogService.updateBlog(Number(id), dto);
  }
  //delete one
  @Delete('deleteOneBlog/:id')
  @ApiOperation({ summary: 'Delete One Blog' })
  @ApiResponse({ status: 200, description: 'Delete one' })
  deleteOneBlog(@Param('id') id: string) {
    return this.blogService.deleteOneBlog(Number(id));
  }
  //delete all
  @Delete('deleteAllBlog')
  @ApiOperation({ summary: 'Delete all Blogs' })
  @ApiResponse({ status: 200, description: 'Delete all' })
  deleteAllBlog() {
    return this.blogService.deleteAllBlog();
  }
}
