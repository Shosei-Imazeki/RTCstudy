const express = require("express");
const app = express();
const server = require("http").server(app);
const io = require("socket.io")(server);

server.listen(process.env.PORT || 3030);

app.set("view engine", "ejs");