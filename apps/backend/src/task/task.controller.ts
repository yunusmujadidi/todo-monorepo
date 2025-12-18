import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('tasks')
@UseGuards(AuthGuard)
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  // GET auth belong to the user /tasks
  @Get()
  findAll(@Request() req) {
    const userId = req.user.id;
    return this.taskService.findAll(userId);
  }

  // GET auth belong to the user /tasks
  @Get(':id')
  findOne(@Param('id') id: string, @Request() req) {
    const userId = req.user.sub;
    return this.taskService.findOne(id, userId);
  }

  // POST auth belong to the user /tasks
  @Post()
  create(@Body() createTaskDto: CreateTaskDto, @Request() req) {
    const userId = req.user.sub;
    return this.taskService.create(createTaskDto, userId);
  }

  // PATCH auth  belong to the user /tasks/:id
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
    @Request() req,
  ) {
    const userId = req.user.sub;
    return this.taskService.update(id, updateTaskDto, userId);
  }

  // DELETE auth belong to the user  /tasks/:id
  @Delete(':id')
  delete(@Param('id') id: string, @Request() req) {
    const userId = req.user.sub;
    return this.taskService.delete(id, userId);
  }
}
