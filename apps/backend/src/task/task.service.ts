import { UpdateTaskDto } from './dto/update-task.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
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
    try {
      return await this.prisma.task.create({
        data: createTaskDto,
      });
    } catch (error) {
      if (error.code === 'P2003') {
        throw new NotFoundException('User not found');
      }
      throw error;
    }
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    try {
      return await this.prisma.task.update({
        where: { id },
        data: updateTaskDto,
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('Task not found');
      }
      throw error;
    }
  }

  async delete(id: string) {
    try {
      return await this.prisma.task.delete({
        where: { id },
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('Task not found');
      }
      throw error;
    }
  }
}
