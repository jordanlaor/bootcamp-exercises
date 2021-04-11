import { default as getNotes } from "./notes.js";
import chalk from "chalk";

const msg = getNotes();
console.log(msg);

const greenMsg = chalk.green("Success");
console.log(greenMsg);
