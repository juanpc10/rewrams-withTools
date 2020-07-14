const Coupon = require('../models/coupon');



async function getUserCoupons (req, res) {
  try {
    const coupons = await Coupon.find({username: req.params.username});
    res.status(200);
    res.json(coupons);
  } catch (error) {
    console.log('error', error);      //eslint-disable-line no-console
    res.sendStatus(400);
  }
}

async function postUserCoupons (req, res) {
  try {
    const { username, type, discount, maxDiscount, active } = req.body;
    const coupon = Coupon.create( { username, type, discount, maxDiscount, active } );
    res.status(200);
    res.json(coupon);
  } catch (error) {
    console.log('error', error);      //eslint-disable-line no-console
    res.sendStatus(400);
  }
}


async function deleteUserCoupon (req, res) {
  try {
    await Coupon.findByIdAndDelete({_id: req.params.id});
    res.sendStatus(204);
  } catch (error) {
    console.log('error', error);      //eslint-disable-line no-console
    res.sendStatus(500);
  }
}

async function changeUserDiscount (req, res) {
  try {
    const disc = Number(req.params.num);
    const coupon = await Coupon.findByIdAndUpdate(
      { _id: req.params.id },
      { discount: disc },
      { new: true }
    );
    res.status(200);
    res.json(coupon);
  } catch (error) {
    console.log('error', error);      //eslint-disable-line no-console
    res.sendStatus(500);
  }
}

async function changeUserMaxDiscount (req, res) {
  try {
    const max = Number(req.params.num);
    const coupon = await Coupon.findByIdAndUpdate(
      { _id: req.params.id },
      { maxDiscount: max },
      { new: true }
    );
    res.status(200);
    res.json(coupon);
  } catch (error) {
    console.log('error', error);      //eslint-disable-line no-console
    res.sendStatus(500);
  }
}

async function changeUserStatus (req, res) {
  try {
    const status = req.params.active;
    const coupon = await Coupon.findByIdAndUpdate(
      { _id: req.params.id },
      { active: status },
      { new: true }
    );
    res.status(200);
    res.json(coupon);
  } catch (error) {
    console.log('error', error);      //eslint-disable-line no-console
    res.sendStatus(500);
  }
}



module.exports = {
  getUserCoupons,
  postUserCoupons,
  deleteUserCoupon,
  changeUserDiscount,
  changeUserMaxDiscount,
  changeUserStatus
};