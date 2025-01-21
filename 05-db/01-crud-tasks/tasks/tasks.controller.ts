import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  UsePipes,
  NotFoundException
} from "@nestjs/common";
import { TaskService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { Task } from "./entities/task.entity";
import { ValidationPipe } from "@nestjs/common";

@Controller("tasks")
export class TasksController {
  constructor(private readonly tasksService: TaskService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id) {
    const result = await this.tasksService.findOne(+id);

    if(result) {
      return result;
    }

    throw new NotFoundException();
  }

  @Patch(":id")
  @UsePipes(
    new ValidationPipe({
      forbidNonWhitelisted: true,
      forbidUnknownValues: true,
      whitelist: true,
    }),
  )
  async update(@Param("id") id: string, @Body() task: UpdateTaskDto) {
    const result = await this.tasksService.findOne(+id);

    if(!result) {
      throw new NotFoundException();
    }

    return this.tasksService.update(+id, task);
  }

  @UsePipes(
    new ValidationPipe({
      forbidNonWhitelisted: true,
      forbidUnknownValues: true,
      whitelist: true,
    }),
  )
  @Delete(":id")
  async remove(@Param("id") id: string) {
    const result = await this.tasksService.findOne(+id);

    if(!result) {
      throw new NotFoundException();
    }

    await this.tasksService.remove(+id);

    return { message: "Task deleted successfully" };
  }
}
