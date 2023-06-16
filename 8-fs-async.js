const { log } = require("console");
const { readFile, writeFile, write } = require("fs");

console.log("start");

readFile("./content/subfolder/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/subfolder/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/subfolder/fs-async.txt",
      `here is the result: ${first} and ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with task");
      }
    );
  });
});
console.log("start new one");
