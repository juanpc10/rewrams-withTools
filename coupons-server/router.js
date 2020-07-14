const router = require('express').Router();
const controller = require('./controller/dm');
const controller2 = require('./controller/coupon');






router.get('/dms/:account', controller.getUserDms);
router.post('/dms', controller.postUserDm);
router.delete('/dms/:id', controller.deleteUserDms);


router.get('/coupons/:username', controller2.getUserCoupons);     /// get by user ===>  username ideally
router.post('/coupons', controller2.postUserCoupons);
router.delete('/coupons/:id', controller2.deleteUserCoupon);
router.put('/coupons/:id/disc/:num', controller2.changeUserDiscount);    // change by username, 
router.put('/coupons/:id/max/:num', controller2.changeUserMaxDiscount);    // change by username
router.put('/coupons/:id/:active', controller2.changeUserStatus);          // change by username








module.exports = router;