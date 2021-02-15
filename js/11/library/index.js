function canBeRead(library) {
  library.forEach((book) => {
    book.readingStatus
      ? console.log(
          `The book name is ${book.title}, the author name is ${book.author} and the reading status is ${book.readingStatus}`
        )
      : null;
  });
}

const library = [
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true,
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true,
  },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false,
  },
];

canBeRead(library);
