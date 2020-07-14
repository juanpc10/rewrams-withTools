const BASE_URL = "http://localhost:3201/";

export default { 
  getAllCoupons: (username) => {
    return fetchRequest(username);
  },
};

async function fetchRequest (user) {
  try {
    const res = await fetch(BASE_URL + 'coupons/' + user);
    const res_1 = res.status <= 400 ? res : Promise.reject(res);
    return await res_1.json();
  }
  catch (err) {
    console.log(err);
  }
};
