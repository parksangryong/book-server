const express = require("express");
const app = express();
const PORT = 4000;
const cors = require("cors");
var mysql = require("mysql");

const db = mysql.createPool({
  host: "svc.sel4.cloudtype.app",
  user: "root",
  password: "33123asd",
  database: "testdb",
  port: 31341,
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("test open");
});

app.listen(PORT, () => {
  console.log(`https://localhost:${PORT}`);
});
