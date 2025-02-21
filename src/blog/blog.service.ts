import { Injectable } from '@nestjs/common';
import { Userdto } from 'src/dto/dto';
// import { SingleBlog } from 'src/dto/singleblogdto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BlogService {
  constructor(private prisma: PrismaService) {}
  async createBlog(dto: Userdto) {
    const blog = await this.prisma.blogs.create({
      data: {
        title: dto.title,
        type: dto.type,
        description: dto.description,
      },
    });
    return { blog };
  }
  async getAllBlog() {
    const blog = await this.prisma.blogs.findMany();
    return { msg: 'found the blog', blog };
  }
  async getBlog(Id: number) {
    const blog = await this.prisma.blogs.findUnique({ where: { id: Id } });
    return { msg: 'Found the blog you were looking for', blog };
  }
  async updateBlog(id: number, dto: Userdto) {
    const blog = await this.prisma.blogs.update({
      where: { id },
      data: {
        title: dto.title,
        type: dto.type,
        description: dto.description,
      },
    });
    return { msg: 'Updated Blog', blog };
  }
  async deleteOneBlog(id: number) {
    const blog = await this.prisma.blogs.delete({ where: { id } });
    return { msg: 'deleted the blog', blog };
  }
  async deleteAllBlog() {
    const blog = await this.prisma.blogs.deleteMany();
    return { msg: 'Deleted all blogs', blog };
  }
}
