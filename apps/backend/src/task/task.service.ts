import { UpdateTaskDto } from './dto/update-task.dto';
import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async findAll(userId: string) {
    return await this.prisma.task.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string, userId: string) {
    const result = await this.prisma.task.findUnique({
      where: { id },
    });

    if (!result) {
      throw new NotFoundException('Task not found');
    }

    // compare to userId
    if (result.userId !== userId) {
      throw new ForbiddenException('Cannot access to this task');
    }

    return result;
  }

  async create(createTaskDto: CreateTaskDto, userId: string) {
    try {
      return await this.prisma.task.create({
        data: {
          ...createTaskDto,
          userId,
        },
      });
    } catch (error) {
      if (error.code === 'P2003') {
        throw new NotFoundException('User not found');
      }
      throw error;
    }
  }

  async update(id: string, updateTaskDto: UpdateTaskDto, userId: string) {
    // check task belong to user
    await this.findOne(id, userId);

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

  async delete(id: string, userId: string) {
    // check task belong to user
    await this.findOne(id, userId);
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
