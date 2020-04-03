import cCipher from './ceasar';

describe('Ccipher', () => {
  it('encrypts a string by default', () => {
    expect(cCipher('z', 5)).toBe('e');
    expect(cCipher('Z', 5)).toBe('E');
    expect(cCipher('a', 5)).toBe('f');
  });

  it('returns an empty space when there is no letter ', () => {
    expect(cCipher('abcdef abcdef')).toBe('bcdefg bcdefg');
  });

  it('encrypts a string by the increment', () => {
    expect(cCipher('attack at dawn', 5)).toBe('fyyfhp fy ifbs');
  });


  it('encrypts a string by the increment', () => {
    expect(cCipher('zoro is back', 25)).toBe('ynqn hr azbj');
  });
});
