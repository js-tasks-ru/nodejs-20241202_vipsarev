import {
    IsOptional,
    IsBoolean,
    IsString,
    IsNumber
  } from 'class-validator';
  
  export class CreateTaskDto {
    @IsOptional()
    @IsNumber()
    readonly id: number;

    @IsString()
    readonly title: string;
  
    @IsBoolean()
    readonly isCompleted: boolean;
  
    @IsString()
    readonly description: string;
  }
  