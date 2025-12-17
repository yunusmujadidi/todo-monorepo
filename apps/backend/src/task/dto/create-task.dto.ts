import { Status } from 'generated/prisma/enums';

export class CreateTaskDto {
  title: string;
  description: string;
  status: Status;
  deadline: string;
  userId: string;
  createdBy: string;
}
