const users = [
  {
    id: 167464,
    firstName: 'Jimmy',
    lastName: 'Arnold',
    email: 'jimmya@gmail.com',
  },
  {
    id: 578447,
    firstName: 'Martha',
    lastName: 'Goldman',
    email: 'gold@hotmail.com',
  },
  {
    id: 864578,
    firstName: 'Tim',
    lastName: 'Burton',
    email: 'timmy.hotmail.com',
  },
];

const ol = document.createElement('ol');
users.forEach((user) => {
  const li = document.createElement('li');
  li.textContent = `${user.firstName} ${user.lastName}`;
  li.dataset.id = `${user.id}`;
  ol.append(li);
});
document.body.append(ol);
ol.style.listStyle = 'none';
