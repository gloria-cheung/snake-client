// establishes a connection with the game server
const net = require("net");
const connect = function() {
  const conn = net.createConnection({
    host: "localhost" , // IP address here,
    port: 50541 // PORT number here,
  });
  conn.on("connect", () => {
    // print msg when connection is first established
    console.log("YAY! Connected to server 😄");
    // msg sent to server to write so that our "name" appears above snake
    conn.write("Name: GC!");
    // if we wanted our snake to start off with 1 square up:
    // conn.write("Move: up");

  });
  conn.on("data", (data) => {
    // message that server sends back to us
    console.log("Server says:", data);
  });
  conn.on("end", () => {
    // print msg when connection is terminated
    console.log("BOO, disconnected from server 😣");
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;