import React from 'react';
import Layout from '../../layout/Layout';
import './more.css';



const More = () => {

  return (
    <Layout>
      <div className='more-page'>

        <div className='media-channels-coming-soon'>

          <div>
            <img src='https://www.gizlogic.com/wp-content/uploads/2019/08/Twitter.jpg' alt='Twitter'></img>
          </div>
          <div>
            <img src='https://about.fb.com/wp-content/uploads/2018/11/fb-hero-image-001.jpeg?fit=1920%2C1080' alt='Facebook'></img>
          </div>
          <div>
            <img src='https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_950/https://www.irishwebservices.ie/wp-content/uploads/2019/11/google-my-business-chattanooga-marketing-company.jpg' alt='google-my-business'></img>
          </div>
          <div>
            <img src='https://cdn.vox-cdn.com/thumbor/Ey90ZIOiuYjH66Yl0UeNocJjUTo=/0x0:1000x640/1200x800/filters:focal(420x240:580x400)/cdn.vox-cdn.com/uploads/chorus_image/image/56041811/Yelp_trademark_RGB_outline.0.jpg' alt='yelp'></img>
          </div>
          <div>
            <img src='https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/01/28/15802459449976.jpg' alt='tik-tok'></img>
          </div>
          <div>
            <img src='https://tentulogo.com/wp-content/uploads/Pinterest-CABECERA-POST-BLOG.jpg' alt='pinterest'></img>
          </div>
          <div>
            <img src='https://static.facebook.com/images/whatsapp/www/whatsapp-promo.png' alt='whatsapp'></img>
          </div>
          <div>
            <img src='https://coiski.com/staging/wp-content/uploads/2018/01/Coiski.jpg' alt='snapchat'></img>
          </div>


            <h2 className='channels-header'>Coming soon</h2>

        </div>

      </div>
    </Layout>
  );
};





export default More;
