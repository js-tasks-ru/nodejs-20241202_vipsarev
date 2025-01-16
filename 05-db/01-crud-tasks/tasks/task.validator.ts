import {
    IsOptional,
    IsBoolean,
    IsString
  } from 'class-validator';
  
  export class TaskValidator {
    @IsOptional()
    readonly id: number;

    @IsOptional()
    @IsString()
    readonly title: string;
  
    @IsOptional()
    @IsBoolean()
    readonly isCompleted: boolean;
  
    @IsOptional()
    @IsString()
    readonly description: string;
  }
  