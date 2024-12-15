import { Controller, Get, Query, NotFoundException, UsePipes } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { TaskQuery } from "./task.class.query";
import { ValidationPipe } from "@nestjs/common";

@Controller("tasks")
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  @UsePipes(new ValidationPipe({ 
    transform: true,  
    transformOptions: { enableImplicitConversion: true },
    forbidNonWhitelisted: true,
    whitelist: true
  }))
  getTasks(
    @Query() query: TaskQuery
  ) {
    return this.tasksService.getFilteredTasks(query.status, query.page, query.limit );
  }
}
