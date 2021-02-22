window.onkeyup = function (e) {
  if (e.ctrlKey && e.keyCode === 70) {
    alert('default behavior prevented');
  }
};
