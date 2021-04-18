const fs = require("fs");

fs.writeFileSync("./fsNewFile.txt", "fs new file content");
fs.copyFileSync("./fsNewFile.txt", "fsCopyFile.txt");
fs.renameSync("./fsNewFile.txt", "./fsNewNameFile.txt");
console.log(fs.readdirSync("."));
console.log(fs.readFileSync("./fsCopyFile.txt"));
