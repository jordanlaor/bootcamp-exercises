function circleArea(radius) {
  return radius ** 2 * Math.PI;
}

const radius = 3;
const area = circleArea(radius);
// eslint-disable-next-line no-console
console.log(
  `The area of a circle with a radius of ${radius} is ${area}.
  Rounded to 2 decimal places it should be ${area.toFixed(2)}`
);
