import { Test, TestingModule } from '@nestjs/testing';
import { AccountController } from './account.controller';
import { CreateAccountDto } from './dto/create-account.dto';

describe('AccountController', () => {
  let controller: AccountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountController],
    }).compile();

    controller = module.get<AccountController>(AccountController);
  });

  describe('create()', () => {
    it('should create an account', () => {
      const createAccountDto: CreateAccountDto = { name: 'test', balance: 0 };
      expect(controller.create(createAccountDto)).toBe('Hello test');
    });
  });
});
