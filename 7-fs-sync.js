const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const first = readFileSync("./content/subfolder/first.txt", "utf8");
const second = readFileSync("./content/subfolder/second.txt", "utf8");

writeFileSync("./content/subfolder/result.txt", `both ${first} and ${second}`, {
  flag: "a",
});
console.log("done with task");
console.log("start new one");
//flag a means append
