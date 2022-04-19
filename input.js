// Stores the active TCP connection object.
let connection;

// requiring constants from constants module 
const {MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY, MOVE_UP_KEY, messages} = require("./constants");


// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", (key) => {
    handleUserInput(key);
  });

  return stdin;
};

// "data" callback handler for stdin
const handleUserInput = function(key) {
  // ctrl + c to exit the game
  if (key === "\u0003") {
    process.exit();
  }
  if (key === "w") {
    // since connection object is named connection (instead of conn), use connection.write to write to server
    connection.write(MOVE_UP_KEY);
  }
  if (key === "s") {
    connection.write(MOVE_DOWN_KEY);
  }
  if (key === "a") {
    connection.write(MOVE_LEFT_KEY);
  }
  if (key === "d") {
    connection.write(MOVE_RIGHT_KEY);
  }
  if (messages[key]) {
    connection.write(`Say: ${messages[key]}`);
  }
  
};

module.exports = { setupInput };