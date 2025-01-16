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
import { Task } from "./entities/task.entity";
import { TaskValidator } from "./task.validator";
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
  findOne(@Param("id") id) {
    const result = this.tasksService.findOne(+id);

    if(!result) {
      return result;
    }

    return new NotFoundException();
  }

  @Patch(":id")
  @UsePipes(
    new ValidationPipe({
      forbidNonWhitelisted: true,
      forbidUnknownValues: true,
      whitelist: true,
    }),
  )
  update(@Param("id") id: string, @Body() task: TaskValidator): Promise<Task> {
    return this.tasksService.update(+id, task);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    try {
      this.tasksService.remove(+id);
      return { message: "Task deleted successfully" };
    } catch (e) {}
  }
}
