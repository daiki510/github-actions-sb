import { sum } from '../src/index';

describe('sum', () => {
  it('returns correct result', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
