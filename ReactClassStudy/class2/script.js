const fs = require("fs");

fs.writeFileSync("style.css", "body{color:black}");
console.log(fs);

const readFS = fs.readFileSync("style.css", "utf8");
console.log("\n\n\n\n");
console.log(readFS);
console.log("\n\n\n\n");
// fs.readFile("style.css", "utf8", (err, data) => {
//   if (err) {
//     console.log("error reading file:", err);
//     return;
//   }
//   console.log("\n\tfile contenet:", data, "\n");
// });
