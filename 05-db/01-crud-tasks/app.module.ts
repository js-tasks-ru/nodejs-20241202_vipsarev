import { Module } from "@nestjs/common";
import { TaskModule } from "./tasks/tasks.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TasksController } from "./tasks/tasks.controller";
import { TaskService } from "./tasks/tasks.service";
import { Task } from "./tasks/entities/task.entity";

@Module({
  imports: [
    TaskModule,
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "db.sqlite",
      entities: [Task],
      synchronize: true
    }),
  ]
})
export class AppModule {}
