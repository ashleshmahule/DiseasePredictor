const { createServer } = require("http");
const express = require("express");
const compression = require("compression");
const morgan = require("morgan");
const path = require("path");
const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000);
const app = express();
var cors = require('cors');
cors({credentials: true, origin: true})
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(compression());
app.use(express.static(path.resolve(__dirname, "disease-prediction-app/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "disease-prediction-app/build", "index.html"));
});





app.listen(PORT, err => {
  if (err) throw err;
  console.log("SERVER STARTED "+PORT);
});

app.get('/GetMore', function (req, res) {
  console.log(req);

  console.log('posting');
  res.json(req.query);
});