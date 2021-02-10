function swapObject(obj) {
  const swappedObj = {};
  for (const key in obj) {
    swappedObj[obj[key]] = key;
  }
  return swappedObj;
}
