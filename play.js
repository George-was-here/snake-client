const net = require("net");
const { connect } = require('./client.js');
const { setupInput } = require('./input.js');

console.log("Connecting ...");

const connectionObject = connect();

setupInput(connectionObject);

// One way to fix this is to pass the conn object returned by connect() to the setUpInput function. In truth, this is not the most ideal solution, but it is simple and good enough for our purposes.

// Instruction
// In the input module, create a variable in the outer-most scope called connection, which can default to undefined.