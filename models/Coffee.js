const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const CoffeeSchema = new Schema({
  name: String,
  imgUrl: String,
  acidity: String,
  bitterness: String,
  sweetness: String,
  origin: String,
  flavors: [String],
});

module.exports = Coffee = mongoose.model("Coffee", CoffeeSchema);
