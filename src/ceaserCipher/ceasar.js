export default function cCipher(string, increm = 1) {
  const strarray = string.split('');
  const encryptArr = [];

  strarray.forEach((letter, i) => {
    // abc

    const code = string.charCodeAt(i); // Get the char code // a => 97
    let newCode = null;
    let newLetter = null; // Variable to hold
    if (code >= 65 && code <= 90) {
      newCode = ((((code - 65 + increm) % 26) + 26) % 26) + 65;
    } else if (code >= 97 && code <= 122) {
      //
      newCode = ((((code - 97 + increm) % 26) + 26) % 26) + 97;
    } else {
      newCode = code;
    }


    newLetter = String.fromCharCode(newCode);
    encryptArr.push(newLetter);
  });
  return encryptArr.join('');
}
