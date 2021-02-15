// Check if number contains the digit 7
function seven(n) {
  const stringNum = String(n);
  if (n % 7 === 0) {
    if (stringNum.includes('7')) {
      return 'BOOM-BOOM';
    }
    return 'BOOM';
  }
  return n;
}

function oneToNum(n) {
  for (let i = 1; i <= n; i += 1) {
    console.log(seven(i));
  }
}

oneToNum(18);
