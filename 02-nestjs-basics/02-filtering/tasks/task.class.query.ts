import {
    IsInt,
    IsEnum,
    IsOptional
  } from 'class-validator';

  import { Type } from "class-transformer";
  
  export enum TaskStatus {
    IN_PROGRESS = 'in_progress',
    COMPLETED = 'completed',
    PENDING = 'pending'
  }
  
  export class TaskQuery {
    @IsInt()
    @Type(() => Number)
    @IsOptional()
    readonly page: number;
  
    @IsInt()
    @Type(() => Number)
    @IsOptional()
    readonly limit: number;
  
    @IsEnum(TaskStatus)
    @IsOptional()
    readonly status: TaskStatus;
  }
  