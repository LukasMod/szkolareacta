import { sum } from './App';

describe.skip('Function sum test', () => {
  it('should function return be equal to a+b', () => {
    expect(sum(5, 10)).toBe(5 + 10);
  });
});
