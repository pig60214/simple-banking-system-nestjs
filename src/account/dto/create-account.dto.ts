import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Min, IsInt } from 'class-validator';

export class CreateAccountDto {
  @ApiProperty({ example: 'Michelle', description: 'The name of the account' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 10000000 })
  @IsInt()
  @Min(0)
  balance: number;
}
