const book = {
  name: `The Lean Startup`,
  author: `Eric Ries`,
  pages: 336,
  genres: [`Business`, `Non-fiction`, `Entrepreneurship`],
  publishedYear: 2011,
};

function bookDesciption(book) {
  return `The book "${book.name}" was written by ${book.author} in the year ${book.publishedYear}.
  It is a ${book.genres.join(', ')} book. The book has ${book.pages} pages.`;
}
