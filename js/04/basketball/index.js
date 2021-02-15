function whoWins(johnAvr, mikeAvr, maryAvr) {
  if (johnAvr > mikeAvr) {
    if (johnAvr > maryAvr) {
      return `The winner team is John's with an average of ${johnAvr}`;
    }
    if (maryAvr > johnAvr) {
      return `The winner team is Mary's with an average of ${maryAvr}`;
    }
    return `It's a draw! Both John and Mary's teams finished with an average of ${johnAvr}`;
  }
  if (johnAvr < mikeAvr) {
    if (mikeAvr > maryAvr) {
      return `The winner team is Mike's with an average of ${mikeAvr}`;
    }
    if (maryAvr > mikeAvr) {
      return `The winner team is Mary's with an average of ${maryAvr}`;
    }
    return `It's a draw! Both Mike and Mary's teams finished with an average of ${johnAvr}`;
  }
  return `It's a draw! All teams finished with an average of ${mikeAvr}`;
}

let johnAvr = (89 + 120 + 103) / 3;
let mikeAvr = (116 + 94 + 123) / 3;
let maryAvr = (97 + 134 + 105) / 3;
console.log(whoWins(johnAvr, mikeAvr, maryAvr));
johnAvr = (89 + 120 + 103 + 100) / 4;
mikeAvr = (116 + 94 + 123 + 1) / 4;
maryAvr = (97 + 134 + 105 + 1) / 4;
console.log(whoWins(johnAvr, mikeAvr, maryAvr));
johnAvr = (89 + 120 + 103 + 100) / 4;
mikeAvr = (116 + 94 + 123 + 1) / 4;
maryAvr = (97 + 134 + 105 + 76) / 4;
console.log(whoWins(johnAvr, mikeAvr, maryAvr));
johnAvr = (89 + 120 + 103 + 100) / 4;
mikeAvr = (116 + 94 + 123 + 79) / 4;
console.log(whoWins(johnAvr, mikeAvr, maryAvr));
johnAvr = (89 + 120 + 103 + 100 + 1) / 5;
mikeAvr = (116 + 94 + 123 + 150 + 200) / 5;
maryAvr = (97 + 134 + 105 + 76 + 1) / 5;
console.log(whoWins(johnAvr, mikeAvr, maryAvr));
