import { Test, TestingModule } from '@nestjs/testing';
import { AccountService } from './account.service';
import { Account } from './account.entity';
import { Repository } from 'typeorm';
import { CreateAccountDto } from './dto/create-account.dto';

describe('AccountService', () => {
  let service: AccountService;
  let repository: Repository<Account>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AccountService,
        {
          provide: 'ACCOUNT_REPOSITORY',
          useValue: {
            save: jest
              .fn()
              .mockImplementation((account: CreateAccountDto) =>
                Promise.resolve({ id: '1', ...account }),
              ),
          },
        },
      ],
    }).compile();

    service = module.get<AccountService>(AccountService);
    repository = module.get<Repository<Account>>('ACCOUNT_REPOSITORY');
  });

  describe('create()', () => {
    it('should successfully insert an account', () => {
      const createAccountDto = {
        name: 'test',
        balance: 0,
      };

      expect(service.create(createAccountDto)).resolves.toEqual({
        id: '1',
        ...createAccountDto,
      });
      expect(repository.save).toHaveBeenCalledWith(createAccountDto);
    });
  });
});
