require('dotenv').config();
const express = require('express');
console.log(`\n message:`, process.env.MSG)
const server = express(); // creating an instance of an express server

server.get('/', (req, res) => {
  res.status(200).json({ message: process.env.MSG });
});

const port = process.env.PORT || 4000;

console.log('port', process.env.PORT)
server.listen(port, () => {
  console.log(`\n Server running on port ${port} \n`);
});
