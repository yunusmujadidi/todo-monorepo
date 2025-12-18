import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

// TODO: add route protection
@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  // GET auth /tasks
  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  // GET auth /tasks
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(id);
  }

  // POST auth /tasks
  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  // PATCH auth /tasks/:id
  @Patch(':id')
  update(@Param('id') id: string, updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(id, updateTaskDto);
  }

  // DELETE auth /tasks/:id
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.taskService.delete(id);
  }
}
