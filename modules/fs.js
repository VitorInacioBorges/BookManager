const fs = require("fs");
const path = require("path");

// Creating a directory

fs.mkdir(path.join(__dirname, "/test"), (error) => {
  console.log("\nmkdir METHOD RETURN:");
  if (error) {
    return console.log("Error: " + error + "\n");
  }
  console.log("Pasta criada com sucesso!!!\n");
});

// Creating a file

fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  "hello node!",
  (error) => {
    console.log("\nwriteFile METHOD RETURN:");
    if (error) {
      console.log("Erro: " + error + "\n");
    }
    console.log("Arquivo criado com sucesso!!!\n");
  }
);

// Updating a file / Adding to a file

fs.appendFile(
  path.join(__dirname, "/test", "test.txt"),
  "hello world!",
  (error) => {
    console.log("\nappendFile METHOD RETURN:");
    if (error) {
      console.log("Erro: " + error + "\n");
    }
    console.log("Arquivo atualizado com sucesso!!!\n");
  }
);

// Read a file

fs.readFile(
  path.join(__dirname, "/test", "test.txt"),
  "utf8",
  (error, data) => {
    console.log("\nreadFile METHOD RETURN:");
    if (error) {
      console.log("Erro: ", error + "\n");
    }
    console.log(data + "\n");
  }
);
