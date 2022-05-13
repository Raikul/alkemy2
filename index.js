const express = require("express");
const bodyParser = require("body-parser");

const apiRouter = require("./routes/api");
const res = require("express/lib/response");

const app = express();

// require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/static", express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.use("/api", apiRouter);

app.listen(3000, () => {
  console.log("Servidor Arrancado");
});
