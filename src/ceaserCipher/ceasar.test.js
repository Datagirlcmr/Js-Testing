import cCipher from './ceasar';

describe('Ccipher', ()=>{
    it('encrypts a string by default', ()=>{
        expect(cCipher('abcdef')).toBe('bcdefg')
    })

    it('returns an empty space when there is no letter ', () =>{
        expect (cCipher('abcdef abcdef')). toBe('bcdefg bcdefg')
    })

    it('encrypts a string by the increment', ()=>{
        expect(cCipher('attack at dawn', 5)).toBe('fyyfhp fy ifbs')
    })
})