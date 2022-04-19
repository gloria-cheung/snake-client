const connect = require("./client")

console.log("Connecting ...");
connect();

// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // "data" callback handler for stdin
  const handleUserInput = function(key) {
    // ctrl + c to exit the game
    if (key === '\u0003') {
      process.exit();
    }
  };

  stdin.on("data", handleUserInput);

  return stdin;
};

setupInput();
