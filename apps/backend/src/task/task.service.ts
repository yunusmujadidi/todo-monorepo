import { UpdateTaskDto } from './dto/update-task.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.task.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.task.findUnique({
      where: { id },
    });
  }

  async create(createTaskDto: CreateTaskDto) {
    return await this.prisma.task.create({
      data: createTaskDto,
    });
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    return await this.prisma.task.update({
      where: { id },
      data: updateTaskDto,
    });
  }

  async delete(id: string) {
    return await this.prisma.task.delete({
      where: { id },
    });
  }
}
