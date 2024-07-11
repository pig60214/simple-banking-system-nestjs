import { Global, Module } from '@nestjs/common';
import { RequestContextService } from 'src/core/services/request-context.service';

@Global()
@Module({
  providers: [RequestContextService],
  exports: [RequestContextService],
})
export class RequestContextModule {}
