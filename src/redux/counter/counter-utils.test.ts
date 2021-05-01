import { neverNegative } from './counter-utils';

describe('counter-utils', () => {
  describe('neverNegative()', () => {
    it('should never return less than 0', () => {
      const result = neverNegative(-7);
      expect(result).toBe(0);
    });
    it('should return `num` param if it\'s 0 or higher', () => {
      const result1 = neverNegative(0);
      const result2 = neverNegative(3);
      expect(result1).toBe(0);
      expect(result2).toBe(3);
    });
  });
});
