const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost" , // IP address here,
    port: 50541 // PORT number here,
  });
  conn.on("connect", () => {
    // code that does something when connection is first established
    console.log("YAY! Connected to server 😄");
  })
  conn.on("data", (data) => {
    console.log("Server says:", data);
  })
  conn.on("end", () => {
    console.log("BOO, disconnected from server 😣")
  })
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();
