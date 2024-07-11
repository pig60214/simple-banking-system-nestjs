import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST })
export class RequestContextService {
  private requestUuid: string;

  setRequestId(uuid: string) {
    this.requestUuid = uuid;
  }

  getRequestId(): string {
    return this.requestUuid;
  }
}
