const date = new Date(Date.now());
const options = { weekday: 'long' };
const day = date.toLocaleDateString(undefined, options);
// eslint-disable-next-line no-console
console.log(day);
