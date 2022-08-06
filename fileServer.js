const console = require("console");
const net = require("net");
const fs = require('fs');
const server = net.createServer();
let fileNames = fs.readdirSync('./files');

server.on("connection", (client) => {
  console.log("New client connected!");

  client.write("Welcome to the file server! What file would you like?");

  client.setEncoding("utf8"); // interpret data as text

  client.on("data", (data) => {
    console.log("File request: ", data);
    if (fileNames.includes(data)) {
      client.write("Yes, we have that file. One moment, please.");
      setTimeout(() => {
        client.write(`You can access your file at ./files/${data}`);
      }, 1)
    } else {
      client.write("No, I'm sorry. We do not have that file.");
    }
    
  });
});

server.listen(3000, () => {
  console.log("Server listening on port 3000!");
});