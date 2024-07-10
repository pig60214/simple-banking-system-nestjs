import { Test, TestingModule } from '@nestjs/testing';
import { AccountController } from './account.controller';
import { CreateAccountDto } from './dto/create-account.dto';
import { AccountService } from './account.service';

describe('AccountController', () => {
  let controller: AccountController;
  let service: AccountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountController],
      providers: [
        AccountService,
        {
          provide: AccountService,
          useValue: {
            create: jest
              .fn()
              .mockImplementation((account: CreateAccountDto) =>
                Promise.resolve({ id: '1', ...account }),
              ),
          },
        },
      ],
    }).compile();

    controller = module.get<AccountController>(AccountController);
    service = module.get<AccountService>(AccountService);
  });

  describe('create()', () => {
    it('should create an account', () => {
      const createAccountDto: CreateAccountDto = { name: 'test', balance: 0 };
      expect(controller.create(createAccountDto)).resolves.toEqual({
        id: '1',
        ...createAccountDto,
      });
      expect(service.create).toHaveBeenCalledWith(createAccountDto);
    });
  });
});
