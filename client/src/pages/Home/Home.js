import React from 'react';
import './Home.css';

import Layout from '../../layout/Layout';



import RewramsCarousel from '../../components/HomeComp/carousel';






const Home = () => {

  return (
    <Layout>

      {/* <div className='about-header'>
        <h2>Rewarding customers</h2>
      </div>  */}
      <div className='about-container'>
        
        <div className='about-left'>
          <RewramsCarousel />
        </div>

        <div className='about-right'>
          <div className='about-rewrams'>
            <div className='whatis-header'>
              <h4>What is Rewrams</h4>
            </div>
            <p>
              Rewrams is a social media reward system for customers. The application connects to a business entity database
              and automates the creation plus distribution of coupons in accordance to a set of rules customizable in rewrams website.
              Rewrams automates the response to customers with a coupon anytime customers share and tag the business entity account.
            </p>
              <p>In other words, when a user shares a post or a story (e.g. instagram) tagging the business account 
                 e.g. @codeworks or @starbucks, rewrams will automatically generate and send a coupon code for 
                 that person e.g. 25% or 1%, depending on his campaign settings determined in rewrams user interface. 
                The code is sent inmediatly to the person via the same channel the notification was sent (instagram dm) and a link to the business website where he or she 
                can proceed to checkout by either product chosen or order type and apply the code sent.
              </p>
          
              <div className='whyuse-header'>
                <h4>Why use Rewrams</h4>
              </div>

              <p>Facebook and instagram ads are expensive. The minimum budget is around $5 dls per day to reach and average audience of 500 at the most,
                not considereing the type of reach out. If you do a conversion type of ad and you track the conversion with a pixel,
                on average, if succesful, you get a conversion after a week or so when the pixel is maturing and facebook is optimizing
                the audience to reach. This could translate to $35 dls per week for 1 conversion per week, then you can scale up and so.
                This may not seem as much but it totals a $155 dls per month, for around 1 possible conversion considering a targeted niche generic product (e.g. $50 bluetooth speaker).
                Fb in collaboration with instagram takes time to understand and optimize the targeting of your audience. Considering you test a certain type of ad (e.g. click type), and a certain type of audience (e.g. young adults age 18-25 with interests in music and have liked spotify,etc.), each test can cost the said amount mentioned, $155/month. The marketing cost can easily increase without having many results (e.g. $155dls/month for each of the 4 to 5 tests = -$620 for selling 1 to 3 $50 speakers).
              </p>
              <p>
                You can reach the same outcome by using your clients social media. When you have a sale, the client is the target audience 
                and as the group he engages is likely to be similar to him in terms of demographics and interests, therefore we can conclude
                his social media group is to some extent your target audience as well. Allowing him to share his experience
                is allowing you to advertise to the target audience you need, similar to facebook figuring out what target audience to advertise.
                The difference is you can determine the price and you are also giving the benefit to the client.
              </p>

          </div>
        </div>      
      </div>

    </Layout>
  );
};

export default Home;


