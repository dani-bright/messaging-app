import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMessageDto {
  @IsNumber()
  @IsNotEmpty()
  senderId: number;

  @IsNumber()
  @IsNotEmpty()
  receiverId: number;

  @IsString()
  @IsNotEmpty()
  subject: string;

  @IsString()
  @IsNotEmpty()
  content: string;
}
