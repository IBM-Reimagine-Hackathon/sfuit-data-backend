const path = require("path");
const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const http = require("http");
const { IbmIot } = require("./ibmIot");
const server = http.createServer(app);
const mongoose = require("mongoose");
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("CONNECTED"))
  .catch((err) => console.error(err));

app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
IbmIot(io);

app.get("/", (req, res) => {
  res.send("SFUIT API");
});

server.listen(process.env.PORT, () => {
  console.log("Server Started");
});
