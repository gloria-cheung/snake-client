// Stores the active TCP connection object.
let connection;

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
  };
  if (key === "w") {
    // since connection object is named connection (instead of conn), use connection.write to write to server  
    connection.write("Move: up");
  };
  if (key === "s") {
    connection.write("Move: down");
  };
  if (key === "a") {
    connection.write("Move: left");
  };
  if (key === "d") {
    connection.write("Move: right");
  };
  if (key === "h") {
    connection.write("Say: hi stranger!");
  };
  if (key === "o") {
    connection.write("Say: oh no..");
  };
  if (key === "l") {
    connection.write("Say: lolololol");
  };
};

module.exports = { setupInput };