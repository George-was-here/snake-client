const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log('Successfully connected');
    conn.write("Name: GTB");
    // conn.write("Move: up");
    // conn.write("Move: up");
  //   setTimeout(() => {
  //     conn.write("Move: up")
  // }, 5000);
  //   setInterval(() => {
  //   conn.write("Move: up")
  // }, 50);
  });
  conn.on('data', (data) => {
    console.log(data.toString());
  });

  //Update the connect function to handle incoming data and console.log it for the player. stdin

  return conn;
};

module.exports = connect;