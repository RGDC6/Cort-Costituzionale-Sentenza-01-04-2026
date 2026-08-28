import { divide } from './calculator';

describe('divide', () => {
  describe('happy path', () => {
    it('should divide two positive numbers correctly', () => {
      expect(divide(6, 2)).toBe(3);
    });

    it('should divide a negative number by a positive number', () => {
      expect(divide(-6, 2)).toBe(-3);
    });

    it('should divide a positive number by a negative number', () => {
      expect(divide(6, -2)).toBe(-3);
    });

    it('should divide two negative numbers', () => {
      expect(divide(-6, -2)).toBe(3);
    });

    it('should handle decimal division correctly', () => {
      expect(divide(5, 2)).toBe(2.5);
    });
  });

  describe('edge cases', () => {
    it('should return 0 when the numerator is 0', () => {
      expect(divide(0, 5)).toBe(0);
    });
  });

  describe('error handling', () => {
    it('should throw Error with message "Division by zero" when denominator is 0', () => {
      expect(() => divide(10, 0)).toThrow('Division by zero');
    });

    it('should throw Error when dividing 0 by 0', () => {
      expect(() => divide(0, 0)).toThrow('Division by zero');
    });
  });
});