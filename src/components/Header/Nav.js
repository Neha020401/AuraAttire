import React, { useState } from 'react';
import NavOptions from './NavOptions';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass, faBagShopping, faUser, faQuestion, faTimes, faBars} from '@fortawesome/free-solid-svg-icons';
import Search from './Search';

const Nav = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [searchBox,setSearchBox] = useState(false);

  function toggleMenu() {
    setDisplayMenu(prev => !prev);
  }

  function toggleSearchBox(){
    setSearchBox(prev=>!prev);
  }

  return (
    <>
      <header>
        <div className="brandLogo-nd-OptionContainer">
          <Link to={'/'}>
            <img src="../../../Images/AuraAttireLogo.png" alt="Aura Attire Logo" className="nav-brandLogo" />
          </Link>
          <NavOptions displayMenu={displayMenu}  toggleMenu={toggleMenu}/>
        </div>
        <div className="logosConatiner">
          { searchBox && <Search toggleSearchBox={toggleSearchBox}/>}
          <FontAwesomeIcon icon={faMagnifyingGlass} className='nav-searchLogo' onClick={toggleSearchBox} />
          <Link to='/myFavorite'><FontAwesomeIcon icon={faHeart} className='' /></Link>
          <Link to='/myshop'><FontAwesomeIcon icon={faBagShopping} className='' /></Link>
          <Link to='/auth'><FontAwesomeIcon icon={faUser} className='' /></Link>
          <Link to={'/customer-service'}><FontAwesomeIcon icon={faQuestion} className='' /></Link>
          <FontAwesomeIcon icon={displayMenu ? faTimes : faBars} className={`displayOnSmallerScreen nav-menuBar ${displayMenu && 'crossSign'}`} onClick={toggleMenu} />
        </div>
      </header>
    </>
  )
}

export default Nav;
