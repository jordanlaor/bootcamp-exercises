const startLi = document.querySelector('.start-here');
startLi.firstChild.textContent = 'main title';
const sub4 = startLi.nextElementSibling.firstElementChild.lastElementChild.cloneNode(true);
sub4.textContent = 'sub title 4';
startLi.nextElementSibling.firstElementChild.appendChild(sub4);
const lis = startLi.parentElement.querySelectorAll('li');
lis[lis.length - 1].remove();
document.querySelector('title').textContent = 'Masters Of The DOM';
document.querySelector('p').textContent = 'Something of my own';
