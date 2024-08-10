import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

const LogIn = ({switchToSignIn}) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [logInformInput, setLogInformInput] = useState({
    mail: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLogInformInput((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const togglefaEyebtn = (e) => {
    e.preventDefault(); // prevent form submission on button click
    setHidePassword(prev => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default form submission
    // Add your form submission logic here
    console.log('Form submitted:', logInformInput);
  };

  return (
    <div className='logInPage grid'>
      <h3>LOGIN</h3>
      <form onSubmit={handleSubmit} className='grid'>
        <p> Enter your email and password</p>
        <input
          type="email"
          placeholder='xyz@mail.com'
          value={logInformInput.mail}
          onChange={handleInputChange}
          name='mail'
          required // email input should be required
        />
        <div className='LogIn-inputPasswordConatiner grid'>
          <input
            type={hidePassword ? "password" : "text"}
            value={logInformInput.password}
            onChange={handleInputChange}
            placeholder='password'
            name='password'
            required // password input should be required
          />
          <button type="button" onClick={togglefaEyebtn}>
            <FontAwesomeIcon icon={hidePassword ? faEyeSlash: faEye } aria-label={hidePassword ? "Show password" : "Hide password"} />
          </button>
        </div>
        <div className='grid logIn-btnContainer'>
          <p>Forgot Password</p>
          <button type="submit">
            Log In
          </button>
        </div>
      </form>
      <div>
        <div className='grid  logInAccSwtichToSignInPara' onClick={switchToSignIn} >
          Create New Account
        </div>
        <div className='LogInMediaLogo'>
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faGoogle} />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
