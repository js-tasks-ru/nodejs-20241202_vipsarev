import { Module } from "@nestjs/common";
import { TaskService } from "./tasks.service";
import { TasksController } from "./tasks.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Task } from "./entities/task.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  controllers: [TasksController],
  providers: [TaskService],
})
export class TaskModule {}
 