export default function cCipher(string, increm=1) {
    const strarray = string.split('');
    let encryptArr = [];

    strarray.forEach((letter, i) => {
        if (letter == ' ') {
            encryptArr.push(' ');
        }
        else {
            let character = string.charCodeAt(i) + increm;
            const newLetter = String.fromCharCode(character);
            encryptArr.push(newLetter);
        }
    });
    return encryptArr.join('')
}

