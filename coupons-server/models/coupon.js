const mongoose = require('../db');

const Schema = mongoose.Schema;

const CouponSchema = new Schema ({
  username: {type: String, required: true},
  type: {type: String, required: true},
  discount: {type: Number, required: true},
  maxDiscount: {type: Number, required: true},
  active: {type: Boolean, required: true}
});

module.exports = mongoose.model('Coupon', CouponSchema);
