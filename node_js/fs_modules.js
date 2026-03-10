const fs = require("fs");

// fs.writeFileSync("test.txt","Hello Node JS V2.0");

let data = fs.readFileSync("test.txt","utf-8");
console.log(data);
