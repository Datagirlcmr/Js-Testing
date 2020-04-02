export default function cCipher(string, increm = 1) {
  const strarray = string.split("");
  let encryptArr = [];

  strarray.forEach((letter, i) => {
    if (letter == " ") {
      encryptArr.push(" ");
    } else {
      //a = 97 A= 65
      //z = 122 Z= 90
      let newCode = string.charCodeAt(i) + increm; // 102
        let newLetter=null;
      if (newCode >= 65 && newCode <= 90) {
          if(newCode >= 97 && newCode <= 122 ){
              newLetter = String.fromCharCode(newCode);
          }
      } else {
        newCode = 65 + (increm - 1);
        newLetter = String.fromCharCode(newCode);
        
        newCode = 97 + (increm - 1); // 69
        newLetter = String.fromCharCode(newCode);
        continue;
      }

      console.log(newCode);
      
    }
    encryptArr.push(newLetter);

  });
  return encryptArr.join("");
}
