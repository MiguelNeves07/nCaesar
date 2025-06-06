function caesar(str, shift, decrypt = false) {
  if (decrypt) shift = -shift;
  return str.split('').map(char => {
    const code = char.charCodeAt(0);

    if (code >= 65 && code <= 90) {
      // A-Z
      return String.fromCharCode(((code - 65 + shift + 26) % 26) + 65);
    } else if (code >= 97 && code <= 122) {
      // a-z
      return String.fromCharCode(((code - 97 + shift + 26) % 26) + 97);
    } else {
      return char; // leave non-letter characters unchanged
    }
  }).join('');
}

function encrypt() {
  const text = document.getElementById('text').value;
  const shift = parseInt(document.getElementById('shift').value);
  const result = caesar(text, shift);
  document.getElementById('output').textContent = result;
}

function decrypt() {
  const text = document.getElementById('text').value;
  const shift = parseInt(document.getElementById('shift').value);
  const result = caesar(text, shift, true);
  document.getElementById('output').textContent = result;
}
