import Ccipher from './ceasar';

describe('Ccipher', ()=>{
    it('encrypts a string', ()=>{
        expect(Ccipher('abcdef')).toBe('bcdefg')

    })
})