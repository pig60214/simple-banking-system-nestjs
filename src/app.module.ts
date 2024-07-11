import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './account/account.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [CoreModule, AccountModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
