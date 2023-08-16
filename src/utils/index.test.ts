import { getRandomColor, getRandomNum, getRandomSize } from ".";

describe('Utility functions', () => {

  describe('getRandomNum', () => {
    it('returns a number within the specified range', () => {
      const result = getRandomNum(5, 10);
      expect(result).toBeGreaterThanOrEqual(5);
      expect(result).toBeLessThanOrEqual(10);
    });
  });

  describe('getRandomColor', () => {
    it('returns a valid HSL color string', () => {
      const colorPattern = /^hsl\(\d{1,3}, 100%, 50%\)$/;
      const result = getRandomColor();
      expect(result).toMatch(colorPattern);
    });

    it('returns a hue value within the range of 0 to 360', () => {
      const result = getRandomColor();
      const hue = parseInt(result.match(/\d+/)[0], 10); // Extract the hue value
      expect(hue).toBeGreaterThanOrEqual(0);
      expect(hue).toBeLessThanOrEqual(360);
    });
  });

  describe('getRandomSize', () => {
    it('returns a number between 50 and 100', () => {
      const result = getRandomSize();
      expect(result).toBeGreaterThanOrEqual(50);
      expect(result).toBeLessThanOrEqual(100);
    });
  });

});
