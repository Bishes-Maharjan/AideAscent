import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class Userdto {
  @ApiProperty({ description: 'The username of the user' })
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString({ message: 'Please enter the title' })
  title: string;

  @ApiProperty({ description: 'The username of the user' })
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString({ message: 'Please enter the title' })
  type: string;

  @ApiProperty({ description: 'The username of the user' })
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString({ message: 'Please enter the title' })
  description: string;
}
