const candyStore = {
  candies: [
    {
      name: 'mint gum',
      id: 'as12f',
      price: 2,
      amount: 2,
    },
    {
      name: 'twix',
      id: '5hd7y',
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};

function getCandy(candyStore, id) {
  for (const candy of candyStore.candies) {
    if (candy.id === id) {
      return candy;
    }
  }
}

function getPrice(candyStore, id) {
  for (const candy of candyStore.candies) {
    return getCandy(candyStore, id).price;
  }
}

function addCandy(candyStore, id, name, price) {
  candyStore.candies.push({
    name,
    id,
    price,
    amount: 1,
  });
}

function buy(candyStore, id) {
  const candyIndex = candyStore.candies.indexOf(getCandy(candyStore, id));
  console.log(candyIndex);
  candyStore.cashRegister += candyStore.candies[candyIndex].price;
  candyStore.candies[candyIndex].amount -= 1;
  return candyStore;
}
