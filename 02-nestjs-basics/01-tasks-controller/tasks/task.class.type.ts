import {
    IsNotEmpty,
    IsString,
    MinLength,
    IsEnum,
  } from 'class-validator';
  
  export enum TaskStatus {
    IN_PROGRESS = 'in_progress',
    COMPLETED = 'completed',
    PENDING = 'pending'
  }
  
  export class TaskClassType {
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    readonly title: string;
  
    @IsNotEmpty()
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    readonly description: string;
  
    @IsEnum(TaskStatus)
    readonly status: TaskStatus;
  }
  