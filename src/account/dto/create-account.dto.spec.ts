import { plainToClass } from 'class-transformer';
import { validateSync } from 'class-validator';
import { CreateAccountDto } from './create-account.dto';

describe('CreateAccountDto', () => {
  describe('Valid Situation', () => {
    it('should be valid', () => {
      const createAccountDto = plainToClass(CreateAccountDto, {
        name: 'test',
        balance: 0,
      });
      const errors = validateSync(createAccountDto);
      expect(errors).toHaveLength(0);
    });
  });

  describe('Invalid Situation', () => {
    it('should be invalid when name is empty', () => {
      const createAccountDto = plainToClass(CreateAccountDto, { balance: 0 });
      const errors = validateSync(createAccountDto);
      expect(errors).not.toHaveLength(0);
    });

    it('should be invalid when balance is negative', () => {
      const createAccountDto = plainToClass(CreateAccountDto, {
        name: 'test',
        balance: -1,
      });
      const errors = validateSync(createAccountDto);
      expect(errors).not.toHaveLength(0);
    });
  });
});
