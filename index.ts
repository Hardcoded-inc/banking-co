const express = require("express");
const cors = require("cors");
const { accountsRoutes } = require("./routes");
const bodyParser = require("body-parser");
require("typescript");

type Account = {
  name: string;
  accountNo: number;
  money: number;
};

const accounts: Account[] = [
  {
    accountNo: 111,
    name: "Krisitan Olszevsky",
    money: 421,
  },
  {
    accountNo: 222,
    name: "Adamn Dupa",
    money: 643,
  },
  {
    accountNo: 333,
    name: "Bob Tanaw",
    money: 4234,
  },
  {
    accountNo: 444,
    name: "Bob Budowniczy",
    money: 97567,
  },
];

// App

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/account", accountsRoutes);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Example app listening on port ${port || 3001} `);
});