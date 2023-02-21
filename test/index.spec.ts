import { sum } from '../src/index';

describe('sum', () => {
  it('returns correct result', () => {
    expect(sum(2, 3)).toBe(5);
  });
});
