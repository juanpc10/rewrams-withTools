
require('dotenv').config();



function couponGenerator() {
  let arrLeters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  coupon = '';

  if (Math.floor(Math.random() * 2) < 1) {
    coupon += arrLeters[Math.floor(Math.random() * 26)];
  } else {
    coupon += String(Math.floor(Math.random() * 9));
  }

  if (Math.floor(Math.random() * 2) < 1) {
    coupon += arrLeters[Math.floor(Math.random() * 26)];
  } else {
    coupon += String(Math.floor(Math.random() * 9));
  }

  if (Math.floor(Math.random() * 2) < 1) {
    coupon += arrLeters[Math.floor(Math.random() * 26)];
  } else {
    coupon += String(Math.floor(Math.random() * 9));
  }

  if (Math.floor(Math.random() * 2) < 1) {
    coupon += arrLeters[Math.floor(Math.random() * 26)];
  } else {
    coupon += String(Math.floor(Math.random() * 9));
  }

  if (Math.floor(Math.random() * 2) < 1) {
    coupon += arrLeters[Math.floor(Math.random() * 26)];
  } else {
    coupon += String(Math.floor(Math.random() * 9));
  }

  if (Math.floor(Math.random() * 2) < 1) {
    coupon += arrLeters[Math.floor(Math.random() * 26)];
  } else {
    coupon += String(Math.floor(Math.random() * 9));
  }

  if (Math.floor(Math.random() * 2) < 1) {
    coupon += arrLeters[Math.floor(Math.random() * 26)];
  } else {
    coupon += String(Math.floor(Math.random() * 9));
  }

  if (Math.floor(Math.random() * 2) < 1) {
    coupon += arrLeters[Math.floor(Math.random() * 26)];
  } else {
    coupon += String(Math.floor(Math.random() * 9));
  }

  if (Math.floor(Math.random() * 2) < 1) {
    coupon += arrLeters[Math.floor(Math.random() * 26)];
  } else {
    coupon += String(Math.floor(Math.random() * 9));
  }

  if (Math.floor(Math.random() * 2) < 1) {
    coupon += arrLeters[Math.floor(Math.random() * 26)];
  } else {
    coupon += String(Math.floor(Math.random() * 9));
  }

  return coupon;
}

// // try2 for secure servers, if having issues with try1
// const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
// // import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"; // Supports ESM

// const WooCommerce = new WooCommerceRestApi({
//   url: 'https://example.com',
//   consumerKey: 'consumer_key',
//   consumerSecret: 'consumer_secret',
//   version: 'wc/v3',
//   queryStringAuth: true // Force Basic Authentication as query string true and using under HTTPS
// });


// try1
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const WooCommerce = new WooCommerceRestApi({
  url: 'https://causeffct.com/',
  consumerKey: process.env.CONSUMER_KEY,
  consumerSecret: process.env.CONSUMER_SECRET,
  version: 'wc/v3'
});

async function postCoupon(data2) {
  try {
    const res = await WooCommerce.post("coupons", data2)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }
  catch (err) {
    console.log(err);
  }
};



let couponcode = couponGenerator();

const data1 = {
  code: couponcode,
  discount_type: "percent",
  amount: "10",
  individual_use: true,
  exclude_sale_items: true,
  minimum_amount: "100.00",
  usage_limit_per_user: 1
};


(async () => {
  let postingcoupon = await postCoupon(data1);
  console.log(couponcode)
})();

// console.log(couponcode)

// WooCommerce.post("coupons", data1)
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.log(error.response.data);
//   });


// console.log(couponcode);






// WooCommerce.get("coupons")
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.log(error.response.data);
//   });