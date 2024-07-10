import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { accountProviders } from './account.providers';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';

@Module({
  imports: [DatabaseModule],
  providers: [...accountProviders, AccountService],
  controllers: [AccountController],
})
export class AccountModule {}
