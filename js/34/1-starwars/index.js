const characters = [];
const htmlBody = document.body;

async function getInfo(num, type) {
  const baseurl = 'https://swapi.dev/api';
  const response = await fetch(`${baseurl}/${type}/${num}/`);
  return await response.json();
}

function getPerson(num) {
  const character = {};
  console.log(getInfo());
  getInfo(num, 'people').then((person) => {
    character.name = person.name;
    character.height = person.height;
    character.hairColor = person.hair_color;
    const planetNum = person.homeworld.match(/\d+/g);
    getInfo(planetNum[planetNum.length - 1], 'planets').then((planet) => {
      character.planet = {
        name: planet.name,
        population: planet.population,
      };
      characters.push(character);
    });
  });
}

async function main(chars) {
  console.log(characters);
  const table = document.createElement('table');
  table.innerHTML = `
  <tr>
    <th>Star Wars</th>
  </tr>`;

  for (const key of Object.keys(chars[0])) {
    table.innerHTML += `<tr><td>${key}</td></tr>`;
  }
  htmlBody.append(table);
}

async function getCharacters() {
  for (let i = 1; i <= 10; i += 1) {
    await getPerson(i);
  }
}

getCharacters();
