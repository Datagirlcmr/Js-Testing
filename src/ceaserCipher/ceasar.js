export default function cCipher(string) {
    const strarray = string.split('');
    let encryptArr = [];

    strarray.forEach((letter, i) => {
        if (letter == '') {
            encryptArr.push('');
        }
        else {
            let character = string.charCodeAt(i) + 1;
            const newLetter = String.fromCharCode(character);
            encryptArr.push(newLetter);
        }
    });
    return encryptArr.join('')
}

