import { IsInt, IsOptional, IsString, Max, Min } from 'class-validator';

export class CreateBookDto {
  @IsString() title: string;
  @IsString() author: string;
  @IsInt() @Min(1) @Max(5) rating: number;
  @IsOptional() @IsString() notes?: string;
}
