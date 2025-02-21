import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class SingleBlog {
  @ApiProperty({ description: 'Enter the id' })
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNumber()
  id: number;
}
