const uniqid = require("uniqid");
const fs = require("fs");
const yargs = require("yargs");

const getUsers = () => {
  try {
    return JSON.parse(fs.readFileSync("users.json").toString());
  } catch (error) {
    return [];
  }
};

yargs.command({
  command: "create",
  builder: {
    name: {
      describe: "the name of the user",
      type: "string",
      demandOption: true,
    },
    email: {
      describe: "the email of the user",
      type: "string",
      demandOption: true,
    },
  },
  handler: (argv) => {
    const users = getUsers();
    users.push({ id: uniqid(), name: argv.name, email: argv.email });
    fs.writeFileSync("./users.json", JSON.stringify(users));
  },
});

yargs.command({
  command: "update",
  builder: {
    id: {
      describe: "the id of the user",
      type: "string",
      demandOption: true,
    },
    name: {
      describe: "the name of the user",
      type: "string",
    },
    email: {
      describe: "the name of the user",
      type: "string",
    },
  },
  handler: (argv) => {
    const users = getUsers();
    users.forEach((user) => {
      if (user.id === argv.id) {
        if (argv.email) user.email = argv.email;
        if (argv.name) user.name = argv.name;
      }
    });
    fs.writeFileSync("./users.json", JSON.stringify(users));
  },
});

yargs.command({
  command: "read",
  builder: {
    id: {
      describe: "the id of the user",
      type: "string",
      demandOption: true,
    },
  },
  handler: (argv) => {
    const users = getUsers();
    const user = users.find((user) => {
      return user.id === argv.id;
    });
    user
      ? console.log(`The user with id ${argv.id} details are: name ${user.name} email ${user.email}`)
      : console.log(`The user with id ${argv.id} doesn't exist`);
  },
});

yargs.command({
  command: "delete",
  builder: {
    id: {
      describe: "the id of the user",
      type: "string",
      demandOption: true,
    },
  },
  handler: (argv) => {
    const users = getUsers();
    const usersFiltered = users.filter((user) => {
      return user.id !== argv.id;
    });
    fs.writeFileSync("./users.json", JSON.stringify(usersFiltered));
  },
});

yargs.parse();
