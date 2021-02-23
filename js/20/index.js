// Make a div
const div = document.createElement('div');

// add a class of wrapper to it
div.classList.add('wrapper');

// put it into the body
document.body.append(div);

// make an unordered list
const ul = document.createElement('ul');

// add three list items with the words "one, two, three" in them
const li = [];
for (let i = 0; i < 3; i += 1) {
  li.push(document.createElement('li'));
  ul.append(li[i]);
}
li[0].textContent = 'One';
li[1].textContent = 'Two';
li[2].textContent = 'Three';

// put that list into the above wrapper
div.append(ul);

// create an image
const img = document.createElement('img');

// set the source to an image
img.src = 'https://source.unsplash.com/500x500/?puppy';

// set the width to 250
img.width = '250';
// add a class of cute
img.classList.add('cute');

// add an alt of Cute Puppy
img.alt = 'Cute Puppy';

// Append that image to the wrapper
div.append(img);

// with HTML string, make a div, with two paragraphs inside of it
const divWP = document.createRange().createContextualFragment(`
<div>
  <p></p>
  <p></p>
</div>
`).firstElementChild;
console.log(divWP);

// put this div before the unordered list from above
ul.insertAdjacentElement('beforebegin', divWP);

// add a class to the second paragraph called warning
const p = document.querySelectorAll('p');
p[1].classList.add('warning');

// remove the first paragraph
p[0].remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height) {
  const html = `<div class="playerCard">
  <h2>${name} — ${age}</h2>
  <p>They are ${height} and ${age} years old. In Dog years this person would be ${
    age * 7
  }. That would be a tall dog!</p>
  </div>`;
  return document.createRange().createContextualFragment(html).firstElementChild;
}

// make a new div with a class of cards
const cardsDiv = document.createElement('div');
cardsDiv.classList.add('cards');

// make 4 player cards using generatePlayerCard
const cards = [];
cards.push(generatePlayerCard('Jordy', 24, '160 cm'));
cards.push(generatePlayerCard('Nattiv', 15, '172 cm'));
cards.push(generatePlayerCard('Orit', 51, '158 cm'));
cards.push(generatePlayerCard('Sahar', 21, '176 cm'));

// append those cards to the div
cards.forEach((card) => cardsDiv.append(card));

// put the div into the DOM just before the wrapper element
div.insertAdjacentElement('beforebegin', cardsDiv);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// select all the buttons!
// make out delete function
// loop over them and attach a listener
cards.forEach((card) => {
  const btn = document.createElement('button');
  btn.classList.add('delete-btn');
  btn.textContent = 'delete';
  card.append(btn);
  card.addEventListener('click', (e) => {
    console.log(e.target.tagName);
    if (e.target.tagName === 'BUTTON') {
      e.currentTarget.remove();
    }
  });
});
