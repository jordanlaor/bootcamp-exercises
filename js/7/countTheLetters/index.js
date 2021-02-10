const array = ['Hello', 'Good Day', 'Your Welcome', 'hotdog', 'hamburgers'];
function countLetters(array) {
  const arrayString = array.join('').toLowerCase().split(' ').join('').split('').sort();
  console.log(arrayString);
  const charCounted = {};
  charCounted.maxOc = {
    count: 0,
    char: '',
  };
  for (const char of arrayString) {
    charCounted[char] = arrayString.filter((value) => char === value).length;
    if (charCounted[char] > charCounted.maxOc.count) {
      charCounted.maxOc.count = charCounted[char];
      charCounted.maxOc.char = char;
    }
  }

  return charCounted;
}
