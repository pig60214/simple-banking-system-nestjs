import { Body, Controller, Post } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { ApiTags } from '@nestjs/swagger';
import { AccountService } from './account.service';
import { Account } from './account.entity';

@ApiTags('Account')
@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  async create(@Body() createAccountDto: CreateAccountDto): Promise<Account> {
    return this.accountService.create(createAccountDto);
  }
}
