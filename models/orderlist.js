const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderListSchema = new Schema({
  brand: { type: String, required: true },
  product: { type: String, required: true },
  type: { type: String, required: true },
  par: { type: Number, required: true},
  count: { type: Number, required: true},
  added: { type: Date, required: true, default: Date.now() }
});

const OrderList = mongoose.model("OrderList", orderListSchema);

module.exports = OrderList;
