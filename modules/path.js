const path = require("path");

// basename
console.log(path.basename(__filename));

// directory
console.log(path.dirname(__filename));

// file type
console.log(path.extname(__filename));

// path object
console.log(path.parse(__filename));

// join path
console.log(path.join(__dirname, "test", "test.html"));
