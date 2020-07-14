import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

let styles = {
    margin: 'auto',
    width: '300px',
  };
  
function RewramsCarousel() {
  return (
		<div className='homepage-container'>
			<div style={styles} >
				<Carousel showIndicators='false' showStatus='false' showThumbs='false' autoPlay='true' infiniteLoop='true' >
					<div className='carousel-image-container'>
						<img src={require('../../images/1-customer-shares-story.jpg')} alt="Hong Kong" />
						<p className="legend">1. Your customer shares a story and tags your business</p>
					</div>
					<div>
						<img src={require('../../images/2-customer-receives-code.png')}alt="Singapore"/>
						<p className="legend">2. Your customer receives a  coupon code</p>
					</div>
					<div>
						<img src={require('../../images/3-customerpays.png')} alt="Japan"/>
						<p className="legend">3. Your customer pays with coupon</p>
					</div>
					<div>
						<img src={require('../../images/4-customers-friend-gets-interested.png')} alt="Las Vegas"/>
						<p className="legend">4. Your customer's friend gets interested</p>
					</div>
					<div>
						<img src={require('../../images/5-new-customer-signsup.png')} alt="Las Vegas"/>
						<p className="legend">5. You have a new customer sign up</p>
					</div>
				</Carousel>
			</div>
		</div>
  );
}

export default RewramsCarousel;