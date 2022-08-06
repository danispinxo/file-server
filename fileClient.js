const net = require("net");

const conn = net.createConnection({
  host: "localhost",
  port: 3000
});

conn.on("data", (data) => {
  console.log("Server says: ", data);
  
});

conn.on("connect", () => {
  let fileRequest = "lenore.txt";
  conn.write(fileRequest);
});

conn.setEncoding("utf8");