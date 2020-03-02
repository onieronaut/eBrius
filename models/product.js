const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  brand: { type: String, required: true },
  product: { type: String, required: true },
  type: { type: String, required: true },
  par: { type: Number, required: true },
  count: { type: Number, required: true },
  updated: { type: Date, required: true, default: Date.now() },
  isOrdered: { type: Boolean, required: true, default: false },
  addedToList: { type: Date},
  toggleUpdate: { type: Boolean, required: true, default: false },
  userid: {type: Schema.Types.ObjectId, ref: "User"}
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
