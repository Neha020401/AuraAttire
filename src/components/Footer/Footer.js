import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebookSquare, faGooglePlay, faApple } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  const [claimToGod,setClaimToGod] = useState(false)
  function displayClaimToGod(){
    setClaimToGod(pre => ! pre)
  }
const claimToGodDisplay ={
  display:claimToGod? 'block':'none'
}

  return (
    <div className='footer'>
      <div className='footerDetailsPointer'>
        <div >
          <h3>Welcome to Aura Attire</h3>
          <ul>
            <li>Social Responsibility</li>
            <li> Sustainability</li>
            <li> Our Factory</li>
            <li>About Us</li>
            <li>Newsroom</li>
          </ul>
        </div>
        <div>
          <h3> Contact Us </h3>
          <ul>
            <li>Support: support@auraattire.com</li>
            <li>Legal: legal@auraattire.com</li>
            <li>Press: press@auraattire.com</li>
          </ul>
        </div>
        <div>
          <h3>Help</h3>
          <ul>
            <li>Payment Methods</li>
            <li> Shipping & Delivery</li>
            <li>Return Policy</li>
            <li> Cookies Settings</li>
          </ul>
        </div>
        <div>
          <h3>Policies</h3>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>

      <div className='socialMediaLogoContainer'>
        <FontAwesomeIcon icon={faInstagram} color='white' />
        <FontAwesomeIcon icon={faTwitter} color='white' />
        <FontAwesomeIcon icon={faFacebookSquare} />
      </div>

      <div className='AppStoreLogoConatiner'>
        <div className='googlePlayStore'>
         <div> <FontAwesomeIcon icon={faGooglePlay} className='googlePlayStoreLogo' /></div>
         <div className='googlePlayStoreName'>
         <span >Get on play store</span>
         <h4>Google Play</h4>
         </div>

        </div>
        <div className='appleStore'>
          <div>
          <FontAwesomeIcon icon={faApple} className='appleStoreLogo'/>
          </div>
          <div className='appleStoreName'>
          <span>Download on the </span>
          <h4>App Store</h4>
          </div>
          
        </div>
      </div>

      <div className='AuraAttireAddresss'>
        <h1>Aura Attire</h1>
        <p className='FooterMainBranchAddress' onClick={displayClaimToGod} >
    Aura Attire WonderLand, 10920 Heavenly Road, Ambarpur, Swarglok. 
    Copyright &copy; AuraAttire (Ambarpur) All rights reserved
</p>
<p className='copywriteclaimtoGod' style={claimToGodDisplay} >
    If you want to claim copyright, please contact Lord Almighty &#x1F60A; , Supreme Overlord of All Things Copyrightable. 
    I’m just a lowly peasant with pockets emptier than a magician’s hat &#x1F4B8; . 
    Good luck &#x1F4AB;, may your quest be fruitful, and may your complaints be ever ignored &#x1F44D;. 
    Cheers and don't trip on your way out! &#x1F44B;
</p>

      </div>
      <div className='paymentMethodContainer'>
        <img src="https://pbs.twimg.com/profile_images/814869197025148928/sdmlM4R-_400x400.jpg" alt="payment mode" />
        <img src="https://imageio.forbes.com/blogs-images/steveolenski/files/2016/07/Mastercard_new_logo-1200x865.jpg?height=512&width=711&fit=bounds" alt="payment mode" />
        <img src="https://d28wu8o6itv89t.cloudfront.net/images/Visadebitcardpng-1599584312349.png" alt="payment mode" />
        <img src="https://finshiksha.com/wp-content/uploads/2021/08/Amex-Banner-Image-2.jpg" alt="payment mode" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy996HGXJZflGogryTXs_5HYJtlbVcBBvs0A&s" alt="payment mode" />
      </div>
    </div>
  )
}

export default Footer
