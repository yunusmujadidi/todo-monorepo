import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Status } from 'generated/prisma/enums';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3, { message: 'Min length for title is 3' })
  @MaxLength(60, { message: 'Max length for title is 60' })
  title: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(3, { message: 'Min length for description is 3' })
  @MaxLength(160, { message: 'Max length for description is 160' })
  description: string;

  @IsOptional()
  @IsEnum(Status)
  status?: Status;

  @IsNotEmpty()
  @IsDateString()
  deadline: string;
}
