import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';
import { RequestContextService } from '../services/request-context.service';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private requestContextService: RequestContextService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest<Request>();
    const uuid = uuidv4().substring(0, 6);
    this.requestContextService.setRequestId(uuid);

    console.log(uuid, request.url, 'Request: ', request.body);
    return next
      .handle()
      .pipe(tap((data) => console.log(uuid, request.url, 'Response:', data)));
  }
}
