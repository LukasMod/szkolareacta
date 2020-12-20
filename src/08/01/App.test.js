import { blue } from '@material-ui/core/colors';
import { sum } from './App';

describe('Function sum test', () => {
  it('should function return be equal to a+b', () => {
    expect(sum(5, 10)).toBe(5 + 10);
  });
});
