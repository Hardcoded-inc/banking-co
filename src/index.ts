const express = require("express");
const bodyParser = require("body-parser");
import accountsRoutes from "./routes/accounts";
require("typescript");

// App

const app = express();
app.use(bodyParser.json());
app.use("/", accountsRoutes);

app.listen(3001, () => {
  console.log(`Banking.co app listening on port ${3001} `);
});
