import { IsArray, IsNotEmpty, IsNumber } from 'class-validator';

export class ReadSubjectDto {
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @IsArray()
  @IsNotEmpty()
  messageIds: number[];
}
