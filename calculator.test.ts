import { divide } from './calculator';

describe('divide', () => {
  describe('Happy Path', () => {
    it('should correctly divide two positive numbers', () => {
      expect(divide(10, 2)).toBe(5);
    });

    it('should correctly divide two negative numbers', () => {
      expect(divide(-10, -2)).toBe(5);
    });

    it('should correctly divide a positive number by a negative number', () => {
      expect(divide(10, -2)).toBe(-5);
    });

    it('should correctly handle decimal results', () => {
      expect(divide(5, 2)).toBe(2.5);
    });
  });

  describe('Edge Cases', () => {
    it('should return 0 when dividing 0 by any non-zero number', () => {
      expect(divide(0, 5)).toBe(0);
    });

    it('should correctly handle division with large numbers', () => {
      expect(divide(1e6, 1e3)).toBe(1000);
    });
  });

  describe('Error Handling', () => {
    it('should throw an error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Division by zero');
    });
  });
});