function lengths(strings) {
  const lengths = [];
  for (word of strings) {
    lengths.push(word.length);
  }
  return lengths;
}

console.log(lengths(['boo', 'doooo', 'hoo', 'ro']));
