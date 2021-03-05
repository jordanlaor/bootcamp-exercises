const characters = [];
const htmlBody = document.body;

async function getInfo(url) {
  const response = await fetch(url).catch((err) => console.log(err));
  return await response.json();
}

async function getPerson(num) {
  const baseurl = 'https://swapi.dev/api';
  const url = `${baseurl}/people/${num}/`;
  const character = {};
  const person = await getInfo(url).catch((err) => console.log(err));
  character.name = person.name;
  character.height = person.height;
  character.hairColor = person.hair_color;
  const planet = await getInfo(person.homeworld).catch((err) => console.log(err));
  character.planet = {
    name: planet.name,
    population: planet.population,
  };
  characters.push(character);
}

async function buildHTML() {
  const table = document.createElement('table');
  const charKeys = Object.keys(characters[0]);
  let planetIndex;
  let innerHTML = `
  <tr>
    <th colspan="${charKeys.length + 1}">Star Wars</th>
  </tr>
  <tr>`;

  charKeys.forEach((key) => {
    innerHTML += `<td>${key}</td>`;
  });

  // for (const index in charKeys) {
  //   if (charKeys[index] === 'planet') {
  //     innerHTML += `<td>${charKeys[index]} ${Object.keys(characters[0][charKeys[index]])[0]}`;
  //     innerHTML += `<td>${charKeys[index]} ${Object.keys(characters[0][charKeys[index]])[1]}`;
  //     planetIndex = index;
  //   } else {
  //     innerHTML += `<td>${charKeys[index]}</td>`;
  //   }
  // }
  innerHTML += `</tr>`;
  for (const char in characters) {
    innerHTML += `<tr>`;
    const charVals = Object.values(characters[char]);
    for (const index in charVals) {
      if (index === planetIndex) {
        innerHTML += `<td>${charVals[index].name}</td>`;
        innerHTML += `<td>${charVals[index].population}</td>`;
      } else {
        innerHTML += `<td>${charVals[index]}</td>`;
      }
    }
    innerHTML += `</tr>`;
  }
  table.innerHTML = innerHTML;
  htmlBody.append(table);
}

async function getCharacters() {
  for (let i = 1; i <= 10; i += 1) {
    await getPerson(i);
  }
}

async function main() {
  await getCharacters();
  buildHTML();
}

main();
