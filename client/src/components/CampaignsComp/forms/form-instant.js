import React, {useState, useContext } from 'react';
import { GlobalContext } from '../../../context/globalState';





export const FormInstant = (user) => {
  const [discountInstant, handleChangeDiscountIn] = useState('');
  const { addSingleEvent } = useContext(GlobalContext);

  // const username = user.nameuser;

  const onSubmit = e => {
    const URL = "http://localhost:3201/coupons/";
 
      fetch(URL+ '5ee9a94ba58b6b4c7d06fc2d/disc/' + discountInstant, { method: 'put' })
        .then(res => res.text())
        .then(res => console.log(res))
      
      fetch(URL + '5ee9a94ba58b6b4c7d06fc2d/max/' + discountInstant, { method: 'put' })
        .then(res => res.text())
        .then(res => console.log(res));

      //changing status of instant coupons to true
      fetch(URL + '5ee9a94ba58b6b4c7d06fc2d/1/', { method: 'put' })
        .then(res => res.text())
        .then(res => console.log(res));

      //changing status of cumulative coupons to false
      fetch(URL + '5ee9a977a58b6b4c7d06fc2e/0/', { method: 'put' })
        .then(res => res.text())
        .then(res => console.log(res));
      
      let newItemCu = {}
      newItemCu.type = 'instant';
      newItemCu.discount = discountInstant;
      newItemCu.maxDiscount = discountInstant;
      newItemCu.active = true;
      addSingleEvent(newItemCu);  

    }
  return (
    <form onSubmit={onSubmit}>
      <div className='form-input-discount'>
        <p>Discount</p>
        {/* <input></input> */}
        <input id='instant-input1' className='settings-input' type='number' name='discountInstant' min="0" max="100" autocomplete='off' placeholder={discountInstant} value={discountInstant} onChange={(a) => handleChangeDiscountIn(a.target.value)} ></input>
      </div>
      <div className='max-disc'>
        <p></p>
      </div>
      <div className='form-button-container'>
        <button type="submit" value="Submit" className='ig-form-data-button'>Change</button>
      </div>
      <div className='form-recommendations'>
        <p>One coupon per user, one discount %. Recommended for businesses with instant payments/ products (e.g. restaurants, online clothing stores)</p>
      </div>
    </form>
  )
}
