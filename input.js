let connection;

const setupInput = function(connectionObject) {
  connection = connectionObject;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  switch (key) {
  case "w": {
    connection.write("Move: up");
    break;
  }
  case "a": {
    connection.write("Move: left");
    break;
  }
  case "s": {
    connection.write("Move: down");
    break;
  }
  case "d": {
    connection.write("Move: right");
    break;
  }
  case "t": {
    connection.write("Say: Hey Peeps!");
    break;
  }

  }
  //One way to fix this is to pass the conn object returned by connect() to the setUpInput function. In truth, this is not the most ideal solution, but it is simple and good enough for our purposes.

  // Instruction
  // In the input module, create a variable in the outer-most scope called connection, which can default to undefined.

};

module.exports = { setupInput, handleUserInput };