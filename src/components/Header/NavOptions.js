import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const NavOptions = ({ displayMenu, toggleMenu }) => {
  const [navDropDown, setNavDropDown] = useState({
    readyToWear: false,
    lookBook: false
  });

  function toggleDropDown(dropdownName) {
    setNavDropDown(prev => 
    ({
      ...prev,
      [dropdownName]: !prev[dropdownName]
    })
  );
  }

  return (
    <Fragment>
      <ul className={`navOptions-ul ${displayMenu ? 'open' : ''}`}>
        <li className="displayOnSmallerScreen">
          <Link to='/auth' onClick={toggleMenu}>
            <FontAwesomeIcon icon={faUserCircle} className='faUserCirlce-nav' />
          </Link>
        </li>
        <li><Link to='/newin' onClick={toggleMenu}>NEW IN</Link></li>
        <li className="displayOnSmallerScreen"><Link to='/customer-service' onClick={toggleMenu}>Customer Service</Link></li>
        <li><Link to='/brands' onClick={toggleMenu}>BRAND</Link></li>
        <li><Link to='/aboutus' onClick={toggleMenu}>ABOUT US</Link></li>
        <li><Link to='/membership' onClick={toggleMenu}>MEMBERSHIP</Link></li>
        <li onClick={() => toggleDropDown('readyToWear')}>READY-TO-WEAR
          {navDropDown.readyToWear && 
          <ul className='dropdownOptions'>
            <li>VIEW ALL</li>
            <li>DRESSES</li>
            <li>KURTIS</li>
            <li>LEHENGA</li>
            <li>SAREE</li>
            <li>BLAZERS</li>
            <li>TOPS-T-SHIRTS</li>
            <li>DENIM</li>
            <li>SHORTS-SKIRTS</li>
            <li>SPORTSWEAR & SWIMWEAR</li>
            <li>PANTS & JUMPSUITS</li>
          </ul>}
        </li>
        <li onClick={() => toggleDropDown('lookBook')}>LOOKBOOK
          {navDropDown.lookBook && 
          <ul className="dropdownOptions">
            <li>TRADITIONAL</li>
            <li>WESTERN</li>
            <li>INDO-WESTERN</li>
            <li>SPORTS</li>
          </ul>}
        </li>
      </ul>
    </Fragment>
  );
}

export default NavOptions;