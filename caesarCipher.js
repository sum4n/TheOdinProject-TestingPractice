function caesarCipher(string, shift) {
  let array = [...string];
  let cipherArray = [];

  for (let i = 0; i < array.length; i++) {
    cipherArray.push(cipherChar(array[i], shift));
  }

  return cipherArray.join("");
}

// Change letter to its ascii value, increment it, change it back to character.
function cipherChar(char, shift) {
  let charCode = char.charCodeAt();

  // for capital letters
  if (charCode >= 65 && charCode <= 90) {
    charCode = charCode + shift;
    if (charCode > 90) {
      charCode = charCode - 26;
      return String.fromCharCode(charCode);
    }
    return String.fromCharCode(charCode);
  }

  // for small letters
  if (charCode >= 97 && charCode <= 122) {
    charCode = charCode + shift;
    if (charCode > 122) {
      charCode = charCode - 26;
      return String.fromCharCode(charCode);
    }
    return String.fromCharCode(charCode);
  }

  // all other characters does not get ciphered
  return String.fromCharCode(charCode);
}

export default caesarCipher;
