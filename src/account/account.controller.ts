import { Body, Controller, Post } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Account')
@Controller('account')
export class AccountController {
  @Post()
  create(@Body() createAccountDto: CreateAccountDto): string {
    return `Hello ${createAccountDto.name}`;
  }
}
