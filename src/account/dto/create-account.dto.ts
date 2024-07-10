import { ApiProperty } from '@nestjs/swagger';

export class CreateAccountDto {
  @ApiProperty({ example: 'Michelle', description: 'The name of the account' })
  name: string;

  @ApiProperty({ example: 10000000 })
  balance: number;
}
