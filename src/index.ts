const express = require("express");
const bodyParser = require("body-parser");
import accountsRoutes from "./routes/accounts";
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
app.use(bodyParser.json());
app.use("/", accountsRoutes);

app.listen(3001, () => {
  console.log(`Example app listening on port ${3001} `);
});
