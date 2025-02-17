const getIDs = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([532, 543, 753, 1, 5]);
    }, 1500);
  });

const getRecipe = (recipeID) =>
  new Promise((resolve, reject) => {
    setTimeout(
      (ID) => {
        const recipe = {
          title: 'Fresh tomato pasta',
          publisher: 'Pinchas Hodadad',
        };
        resolve(`${ID}: ${recipe.title}`);
      },
      1500,
      recipeID
    );
  });

async function fetch() {
  const ids = await getIDs();
  console.log(ids);
  const recipe = await getRecipe(ids[2]);
  console.log(recipe);
}

fetch().catch((error) => {
  console.log('It is an error!');
});
