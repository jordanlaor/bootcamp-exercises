// 1
// כתוב פונקציה printToN המקבלת מספר שלם n ומדפיסה את כל המספרים מ0 ועד n.
function printToN(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

// 2
// כתוב פונקציה  countX המקבלת 2 פרמטרים : n ,t הפונקציה מחזירה כמה מספרים בטווח של 1 עד n מתחלקים ב-t.
function countX(n, t) {
  let count = 0;
  for (let i = 1; i < n; i++) {
    i % t === 0 ? count++ : null;
  }
  return count;
}

// 3
// כתוב פונקציה countEven המקבלת מספר שלם ומחזירה כמה ספרות במספר הן זוגיות.
function countEven(n) {
  const digits = String(n).split('');
  return digits.reduce((count, digit) => (digit % 2 === 0 ? (count += 1) : count), 0);
}

// 4
// כתוב פונקציה countEvenOnRange המקבלת n שהוא מספר תלת ספרתי לפחות ומחזירה כמה ספרות זוגיות יש בטווח של 111 עד n.
function countEvenOnRange(n) {
  const arr = [];
  for (let i = 111; i < n; i++) {
    arr.push(i);
  }
  return arr.reduce((sum, number) => (sum += countEven(number)), 0);
}

// 5
// כתוב פונקציה printReverse שמדפיסה את כל המספרים הזוגיים מ0 ועד 100 בסדר יורד.
function printReverse() {
  for (let i = 100; i >= 0; i -= 2) {
    console.log(i);
  }
}

// 6
// כתוב פונקציה quadratic המקבלת a,c,b ומחזירה פתרון של sמשוואה ריבועית
function quadratic(a, b, c) {
  const x1 = (0 - b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
  const x2 = (0 - b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
  return `x1 = ${x1}, x2 = ${x2}`;
}

// 7
// כתוב פונקציה countABC המקבלת משפט , החזר מערך המציין כמה פעמים מופיעה כל אות.
function countABC(str) {
  const counter = {};
  const chars = str.toLowerCase().split('');
  chars.forEach(char => {
    if(char.match(/[a-z]/)) {
      counter[char] = counter[char] + 1 || 1;
    }
  });
  return counter;
}

// 8
// כתוב פונקציה toUpper המקבלת מחרוזת str באנגלית ומחזירה את המחרוזת באותיות גדולות (אין להשתמש בפעולה  toUpperCase של js ).
function toUpper(str) {
  const chars = str.split('').map((char) => {
    let charCode = char.charCodeAt(0);
    if (charCode >= 97 && charCode <= 122) {
      return String.fromCharCode(charCode - 32);
    }
    return char;
  });
  return chars.join('');
}

// 9
/* כתוב פונקציה checkPassword המקבלת פרמטר password  , הפונקציה מחזירה true במידה והתנאים הבאים מתקיימים : 
א. יש לפחות 3 מספרים
ב. יש 2 אותיות גדולות
ג. אות אחת קטנה
במידה והתנאים לא מתקיימים יש להחזיר false. */
function checkPassword (password) 