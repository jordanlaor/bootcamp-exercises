const yargs = require("yargs");
yargs.command({
  command: "calc",
  describe: "calculates based on command",
  builder: {
    add: {
      describe: "adds two nums",
      type: "array",
    },
    sub: {
      describe: "sub two nums",
      type: "array",
    },
    mult: {
      describe: "mult two nums",
      type: "array",
    },
    pow: {
      describe: "pow of num",
      type: "array",
    },
  },
  handler: function (argv) {
    if (argv.add) console.log(argv.add[0] + argv.add[1]);
    else if (argv.sub) console.log(argv.sub[0] - argv.sub[1]);
    else if (argv.mult) console.log(argv.mult[0] * argv.mult[1]);
    else if (argv.pow) console.log(argv.pow ** 2);
    else console.log("something went wrong");
  },
});

yargs.parse();
