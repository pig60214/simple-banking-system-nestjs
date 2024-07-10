import { Body, Controller, Post } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';

@Controller('account')
export class AccountController {
  @Post()
  create(@Body() createAccountDto: CreateAccountDto): string {
    return `Hello ${createAccountDto.name}`;
  }
}
