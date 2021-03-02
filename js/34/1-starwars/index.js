const characters = [];
const htmlBody = document.body;

async function getInfo(num, type) {
  const baseurl = 'https://swapi.dev/api';
  const response = await fetch(`${baseurl}/${type}/${num}/`);
  return await response.json();
}

async function getPerson(num) {
  const character = {};
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
async function main() {
  for (let i = 1; i <= 10; i += 1) {
    await getPerson(i);
  }

  console.log(await characters);
  const table = document.createElement('table');
  table.innerHTML = `
  <tr>
    <th>Star Wars</th>
  </tr>
  <tr>
      ${Object.keys(await characters[0]).forEach((key) => `<td>${key}</td>`)}
  </tr>`;
  htmlBody.append(table);
}
