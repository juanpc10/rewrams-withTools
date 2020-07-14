import { Router } from 'express';
import usersRoutes from './users';
// import couponsRoutes from './coupon';
// import dmsRoutes from './dm';


const router = Router();

// const controller = require('./dm');
// const controller2 = require('./coupon');



router.use('/users', usersRoutes);
// router.use('/coupons', couponsRoutes);
// router.use('/dms', dmsRoutes);

// router.use('/messages', messagesRoutes);






// router.get('/dms/:user', controller.getDms);
// router.post('/dms/:user', controller.postDms);
// router.delete('/dms/:user/:id', controller.deleteDm);


// router.get('/coupons/:user', controller2.getCoupons);
// router.post('/coupons/:user', controller2.postCoupons);
// router.delete('/coupons/:user/:id', controller2.deleteCoupon);
// router.put('/coupons/:user/:id/disc/:num', controller2.changeDiscount);
// router.put('/coupons/:user/:id/max/:num', controller2.changeMaxDiscount);
// router.put('/coupons/:user/:id/:active', controller2.changeStatus);





export default router;
