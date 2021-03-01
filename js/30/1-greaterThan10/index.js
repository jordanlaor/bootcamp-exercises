function greaterThan10(number) {
  return new Promise((resolve, reject) => {
    if (number > 10) {
      resolve('the number is greater than 10');
    }
    reject('The number is not greater than 10');
  });
}

greaterThan10(13)
  .then((value) => console.log(value))
  .catch((value) => console.log(value));
greaterThan10(9)
  .then((value) => console.log(value))
  .catch((value) => console.log(value));
