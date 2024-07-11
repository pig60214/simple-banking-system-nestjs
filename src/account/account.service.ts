import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Account } from './account.entity';
import { CreateAccountDto } from './dto/create-account.dto';
import { RequestContextService } from 'src/core/services/request-context.service';

@Injectable()
export class AccountService {
  constructor(
    @Inject('ACCOUNT_REPOSITORY')
    private accountRepository: Repository<Account>,
    private readonly requestContextService: RequestContextService,
  ) {}

  async create(createAccountDto: CreateAccountDto): Promise<Account> {
    console.log(this.requestContextService.getRequestId(), 'Create Account');
    return this.accountRepository.save(createAccountDto);
  }
}
