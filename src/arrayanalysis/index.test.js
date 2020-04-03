import analyze from './index';

describe('Array Analysis', () => {
  it('return the average, min, max and length of the array ', () => {
    expect(analyze([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });
});
