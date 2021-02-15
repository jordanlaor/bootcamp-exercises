const bookLean = {
  name: 'The Lean Startup',
  author: 'Eric Ries',
  year: 2011,
};
const bookZero = {
  name: 'Zero to One',
  author: 'Blake Masters and Peter Thiel',
  year: 2014,
};
const bookUtils = {
  getFirstPublished(book1, book2) {
    return Math.min(book1.year, book2.year);
  },
  setNewEdition(book, editionYear) {
    book.latestEdition = editionYear;
  },
  setLanguage(book, language) {
    book.language = language;
  },
  setTranslation(book, language, translator) {
    book.translation = {
      language,
      translator,
    };
  },
  setPublisher(book, name, location) {
    book.publisher = {
      name,
      location,
    };
  },
  isSamePublisher(book1, book2) {
    return book1.publisher.name === book2.publisher.name && book1.publisher.location === book2.publisher.location;
  },
};
