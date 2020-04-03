import reverseString from './reversedString';

describe('reverseString', () => {
  it('It reverses a string from end to start', () => {
    expect(reverseString('selma')).toBe('amles');
    expect(reverseString('fruits')).toBe('stiurf');
    expect(reverseString('computer')).toBe('retupmoc');
    expect(reverseString('phone')).toBe('enohp');
    expect(reverseString('phone Case')).toBe('esaC enohp');
  });
});
