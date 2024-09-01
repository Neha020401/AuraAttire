import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';


const SignIn = ({switchToSignIn}) => {
  const [signInInputs, setSignInInputs] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    termAndCondition: true,
    subscribeMail: true,
  });

  const [hidePassword, setHidePassword] = useState({
    IconPassword: false,
    IconConfirmPassword: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSignInInputs((prevInputs) => ({
      ...prevInputs,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const togglePasswordIcon = (field) => {
    setHidePassword((prevHide) => ({
      ...prevHide,
      [field]: !prevHide[field],
    }));
  };

  return (
    <div className='signInContainer'>
      <h3 >Sign In</h3>
      <form action="">
        <div className='gridInput'>
          <input
            value={signInInputs.email}
            type="text"
            placeholder="xyz@mail.com"
            name="email"
            onChange={handleInputChange}
          />
          <div className='signInTypePassword-inputContainer signInPasswordInput'>
            <input
              value={signInInputs.password}
              placeholder="Password"
              type={hidePassword.IconPassword ? 'text' : 'password'}
              name="password"
              onChange={handleInputChange}
            />
            <button
              type="button"
              onClick={() => togglePasswordIcon('IconPassword')}
              className='signInPassword-btn'
            >
              <FontAwesomeIcon icon={hidePassword.IconPassword ? faEye : faEyeSlash} />
            </button>

          </div>
          <div className='signInTypePassword-inputContainer gridInput signInConfirmPasswordInput'> 
            <input
              value={signInInputs.confirmPassword}
              placeholder="Confirm Password"
              type={hidePassword.IconConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              onChange={handleInputChange}
            />
            <button
              type="button"
              onClick={() => togglePasswordIcon('IconConfirmPassword')}
              className='signInConfirmPassword-btn'
            >
              <FontAwesomeIcon icon={hidePassword.IconConfirmPassword ? faEye : faEyeSlash} />
            </button>
          </div>

        </div>

        <div>
          <div className='signIn-checkboxContainer'>
          <input
            value={signInInputs.termAndCondition}
            type="checkbox"
            checked={signInInputs.termAndCondition}
            name="termAndCondition"
            onChange={handleInputChange}
          />
          <label htmlFor="termAndCondition">Accept All Terms And Conditions</label>

          </div>
          <div className='signIn-checkboxContainer' >
          <input
            value={signInInputs.subscribeMail}
            type="checkbox"
            checked={signInInputs.subscribeMail}
            name="subscribeMail"
            onChange={handleInputChange}
          />
          <label htmlFor="subscribeMail">Subscribe to the latest notifications</label>
          </div>
        </div>
        <div className='grid'>
        <button className='signIn-btn'>Sign In </button>
        </div>
       
      </form>
       <div className='existingLogPara grid' onClick={switchToSignIn}>
        Log In existing account
        <FontAwesomeIcon icon={faArrowRight} />
        </div>
        <div className='signInMediaLogo'>
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faGoogle} />
        </div>
    </div>

  );
};

export default SignIn;
