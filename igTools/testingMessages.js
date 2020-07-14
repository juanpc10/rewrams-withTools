require('./src/tools-for-instagram.js');
require('dotenv').config();
const fetch = require("node-fetch");


const URLmsgs = "http://localhost:3201/dms/testingcauseeffect";
const URLcoupons = "http://localhost:3201/coupons/causeffect";
const URLmsgPost = "http://localhost:3201/dms";

// Returns a random number between 1 and 3 minutes
function genRandomMs() {
  return Math.floor((Math.random() * 30000) + 30000);
}

async function fetchMessages() {
  try {
    const res = await fetch(URLmsgs);
    const res_1 = res.status <= 400 ? res : Promise.reject(res);
    return await res_1.json();
  }
  catch (err) {
    console.log(err);
  }
};
async function fetchCouponSettings() {
  try {
    const res = await fetch(URLcoupons);
    const res_1 = res.status <= 400 ? res : Promise.reject(res);
    return await res_1.json();
  }
  catch (err) {
    console.log(err);
  }
};



async function fetchPost(msgItem) {
  try {
    const res = await fetch(URLmsgPost,
      {
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        method: "post", body: JSON.stringify(msgItem)
      });
    const res_1 = res.status <= 400 ? res : Promise.reject(res);
    return await res_1.json();
  }
  catch (err) {
    console.log(err);
  }
};


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


(async () => {


  console.log("\n1 -- LOGIN --\n".bold.underline.blue);
  let ig = await login();

  setInterval(async () => {

    console.log("\n2 Getting db messages \n".bold.underline.blue);
    let awaitedArr = await fetchMessages();
    let arrWithOnlyMsgs = [];
    let arrWithUsernames = [];
    for (let i = 0; i < awaitedArr.length; i++) {
      let awaitedEl = awaitedArr[i];
      arrWithOnlyMsgs.push(awaitedEl.lastMessage);
      arrWithUsernames.push(awaitedEl.username);
    }
    console.log(arrWithOnlyMsgs);

    console.log("\n3 Getting db coupon settings \n".bold.underline.blue);
    let couponSettingsObj = await fetchCouponSettings();
    console.log(couponSettingsObj);
    let instantObj = couponSettingsObj[0];
    let cumulativeObj = couponSettingsObj[1];
    let instantCouponStatus = instantObj.active;
    let instantDiscount = instantObj.discount;
    let cumulativeCouponStatus = cumulativeObj.active;
    let cumulativeDiscount = cumulativeObj.discount;
    let cumulativeMaxDiscount = cumulativeObj.maxDiscount;


    console.log("\n3 -- Getting pendingInbox --\n".bold.underline.blue);
    let messagesPending = await getInboxPending(ig);
    console.log(messagesPending);

    if (messagesPending.length) {
      console.log("\n4 -- Approving pendingInbox --\n".bold.underline.blue);
      (async () => {
        for (let i = 0; i < messagesPending.length; i++) {
          let singleMessage = messagesPending[i];
          let singleMessageid = singleMessage.threadId;
          let approvingPendings = await approveInboxPending(ig, singleMessageid);
          console.log('new Message!!!!!! from new user'.underline.green);
        }
      })();
    } else {
      console.log("\n4 -- No pending inbox to approve --\n".bold.underline.blue)
      console.log(messagesPending);
    }


    console.log("\n5 -- Getting inbox info -- \n".bold.underline.blue);
    let inboxInfo = await getInbox(ig,);
    for (let i = 0; i < inboxInfo.length; i++) {
      let singleMsg = inboxInfo[i];
      console.log(singleMsg)
      let messageThread = singleMsg.threadId;
      let msgUsers = singleMsg.users[0];
      let messageUsername = msgUsers.username;
      let messageFullname = msgUsers.full_name;
      let msgLast = singleMsg.lastMessage;
      let msgcontent = msgLast.messageContent;



      console.log('inbox msg i: ' + i);
      console.log(msgcontent);
      console.log('...'.underline.green);
      console.log('inbox comparison to db =>')
      console.log(arrWithOnlyMsgs);
      console.log('\n6 -- Checking for new messages -- \n'.bold.underline.blue);
      console.log('db array index of new message ===> -1 if new, else not new')
      console.log(arrWithOnlyMsgs.indexOf(msgcontent));
      if (arrWithOnlyMsgs.indexOf(msgcontent) == -1) {


        console.log("\n7 Checking which coupon type is active \n".bold.underline.blue);
        ///////////------instant coupon checks------->///////////////////////////////////
        if (instantCouponStatus) {
          console.log('Instant Coupons'.green);

          console.log("\n8 -- Checking if user already has a coupon -- \n".bold.underline.blue);
          console.log(arrWithUsernames);
          console.log(messageUsername.green);
          let totalUserCoupons = 0;
          for (let i = 0; i < arrWithUsernames.length; i++) {
            let userOfArr = arrWithUsernames[i];
            if (userOfArr == messageUsername) {
              totalUserCoupons++;
            }
          }
          console.log('Number of coupons user has =>>');
          console.log(totalUserCoupons);
          if (totalUserCoupons > 0) {
            console.log('User already has a coupon');
          } else if (totalUserCoupons < 1) {

            console.log("\n9 -- Checking if a coupon was sent at least a day ago -- \n".bold.underline.blue);
            console.log('under construction')

            console.log("\n10 -- Making new coupon in woocommerce -- \n".bold.underline.blue);
            let coupon = couponGenerator();
            const data1 = {
              code: coupon,
              discount_type: "percent",
              amount: instantDiscount.toString(),
              individual_use: true,
              exclude_sale_items: true,
              minimum_amount: "0",
              usage_limit_per_user: 1
            };
            let postingcouponInstant = await postCoupon(data1);

            console.log("\n11 -- Sending new coupon to user -- \n".bold.underline.blue);
            let reply = await replyDirectMessage(ig, messageThread, '', '', coupon);
            console.log('Reply message =>' + coupon);

            console.log('\n12 -- Posting new message to db -- \n'.bold.underline.blue);
            let newItem1 = {};
            newItem1.account = "testingcauseeffect";
            newItem1.username = messageUsername;
            newItem1.full_name = messageFullname;
            newItem1.lastMessage = coupon;
            let awaitPost = await fetchPost(newItem1);
            console.log('Posting message ==>');
            console.log(newItem1);
          }
          ///////////------cumulative coupon checks------->///////////////////////////////////
        } else if (cumulativeCouponStatus) {
          console.log('Cumulative Coupons'.green);

          console.log("\n8 -- Checking if user already has a coupon -- \n".bold.underline.blue);
          console.log(arrWithUsernames);
          console.log(messageUsername.green);
          let currentDiscountPercentage = 0;
          for (let i = 0; i < arrWithUsernames.length; i++) {
            let userOfArr = arrWithUsernames[i];
            if (userOfArr == messageUsername) {
              currentDiscountPercentage += Number(cumulativeDiscount);
            }
          }
          console.log('Total percentage discount user has =>>');
          console.log(currentDiscountPercentage);
          console.log('Maximum discount percentage allowed =>>');
          console.log(cumulativeMaxDiscount);
          if (currentDiscountPercentage > cumulativeMaxDiscount) {
            console.log('User has already max disc %');
          } else if (currentDiscountPercentage < cumulativeMaxDiscount) {

            console.log("\n9 -- Checking if a coupon was sent at least a day ago -- \n".bold.underline.blue);
            console.log('under construction')

            console.log("\n10 -- Making new coupon in woocommerce -- \n".bold.underline.blue);
            let coupon = couponGenerator();
            const data3 = {
              code: coupon,
              discount_type: "percent",
              amount: cumulativeDiscount.toString(),
              individual_use: true,
              exclude_sale_items: true,
              minimum_amount: "0",
              usage_limit_per_user: 1
            };
            let postingcouponCumulative = await postCoupon(data3);

            console.log("\n11 -- Sending new coupon to user -- \n".bold.underline.blue);
            let reply = await replyDirectMessage(ig, messageThread, '', '', coupon);
            console.log("debuggggging")
            console.log(messageThread)
            console.log(reply)
            console.log('Reply message =>' + coupon);

            console.log('\n12 -- Posting new message to db -- \n'.bold.underline.blue);
            let newItem2 = {};
            newItem2.account = "testingcauseeffect";
            newItem2.username = messageUsername;
            newItem2.full_name = messageFullname;
            newItem2.lastMessage = coupon;
            let awaitPost = await fetchPost(newItem2);
            console.log('Posting message ==>');
            console.log(newItem2);
          }
        }

        console.log('Checking for next message in loop if any'.bold.underline.blue)
        console.log('------------------------------------------'.bold.underline.blue)

      } else {
        return console.log('-- Messages up to date --');
      }
    }
    console.log("\nProcess done!\n".green);
  }, genRandomMs());

  console.log("\nProcess done!\n".green);
  // process.exit();
})();









// {
//   threadId: '340282366841710300949128133068751127939',
//   threadIdV2: '17863230526866819',
//   isGroup: false,
//   users: [
//     {
//       pk: 36377220137,
//       username: 'juan23testing1',
//       full_name: 'Juan tests',
//       is_private: true,
//       profile_pic_url: 'https://instagram.flos1-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.flos1-1.fna.fbcdn.net&_nc_ohc=8_uE6AH0S60AX-8lH8v&oh=58f938c9d3d563066136e145bc818fba&oe=5F03DA8F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2',
//       friendship_status: [Object],
//       is_verified: false,
//       has_anonymous_profile_picture: true,
//       has_threads_app: false,
//       is_using_unified_inbox_for_direct: false,
//       interop_messaging_user_fbid: '17842781936212138'
//     }
//   ],
//   readByUser: true,
//   readByMe: true,
//   oldest_cursor: '29353145799537152709427955343818752',
//   next_cursor: 'MAXCURSOR',
//   lastMessage: {
//     timeStamp: '1591399895012684',
//     type: 'text',
//     messageContent: 'test again'
//   }
// }
// {
//   threadId: '340282366841710300949128160987959789140',
//   threadIdV2: '17891149735528020',
//   isGroup: false,
//   users: [
//     {
//       pk: 499510555,
//       username: 'juanpc10',
//       full_name: 'Juan Carrillo',
//       is_private: false,
//       profile_pic_url: 'https://instagram.fcul2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/93159595_749582458911280_8559000090050560000_n.jpg?_nc_ht=instagram.fcul2-1.fna.fbcdn.net&_nc_ohc=7A3oA5RA4IoAX_q3A3n&oh=5e11381d6f42f10d123e5f34fbdac9f3&oe=5F05FBAF',
//       profile_pic_id: '2284796957220549107_499510555',
//       friendship_status: [Object],
//       is_verified: false,
//       has_anonymous_profile_picture: false,
//       has_threads_app: false,
//       is_using_unified_inbox_for_direct: false,
//       interop_messaging_user_fbid: 118111106244198
//     }
//   ],
//   readByUser: true,
//   readByMe: true,
//   oldest_cursor: '29354806388525083437059162933035008',
//   next_cursor: 'MAXCURSOR',
//   lastMessage: {
//     timeStamp: '1591397227161656',
//     type: 'text',
//     messageContent: '7183323009'
//   }
// }
// {
//   threadId: '340282366841710300949128138802423038857',
//   threadIdV2: '17868964198777737',
//   isGroup: false,
//   users: [
//     {
//       pk: 36777737674,
//       username: 'juan23testing2',
//       full_name: 'Pablo Kasimir',
//       is_private: false,
//       profile_pic_url: 'https://instagram.flos1-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.flos1-1.fna.fbcdn.net&_nc_ohc=8_uE6AH0S60AX-8lH8v&oh=58f938c9d3d563066136e145bc818fba&oe=5F03DA8F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2',
//       friendship_status: [Object],
//       is_verified: false,
//       has_anonymous_profile_picture: true,
//       has_threads_app: false,
//       is_using_unified_inbox_for_direct: false,
//       interop_messaging_user_fbid: '17842142888225675'
//     }
//   ],
//   readByUser: false,
//   readByMe: true,
//   oldest_cursor: '29355990627655776717621160627404800',
//   next_cursor: 'MAXCURSOR',
//   lastMessage: {
//     timeStamp: '1591397226869793',
//     type: 'text',
//     messageContent: '6153586418'
//   }
// }






















