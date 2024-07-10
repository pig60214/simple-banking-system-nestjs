import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Account } from './account.entity';
import { CreateAccountDto } from './dto/create-account.dto';

@Injectable()
export class AccountService {
  constructor(
    @Inject('ACCOUNT_REPOSITORY')
    private accountRepository: Repository<Account>,
  ) {}

  async create(createAccountDto: CreateAccountDto): Promise<Account> {
    return this.accountRepository.save(createAccountDto);
  }
}
