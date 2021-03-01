function makeAllCaps(words) {
  return new Promise((ok, not) => {
    if (words.find((word) => typeof word !== 'string')) {
      not('One of the words is not a word');
    }
    ok(words.map((word) => word[0].toUpperCase() + word.slice(1)));
  });
}

function sortWords(words) {
  return new Promise((ok, not) => {
    if (words.find((word) => typeof word !== 'string')) {
      not('One of the words is not a word');
    }
    ok(words.sort());
  });
}

const words = ['string', 'bla', 'another string'];
makeAllCaps(words)
  .then((value) => sortWords(value))
  .then((value) => console.log(value))
  .catch((value) => console.log(value));
words.push(1);
makeAllCaps(words)
  .then((value) => sortWords(value))
  .then((value) => console.log(value))
  .catch((value) => console.log(value));
