import React,{useState} from 'react'
import SignIn from './SignIn'
import LogIn from './LogIn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
//import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Auth = () => {
  const [switchAuth,setSwitchAuth] = useState(true);
  const toggleAuth =()=>{
    setSwitchAuth(prev => !prev)
  }

  return (
    <div id='AuthPage'>
      <div className="authConatiner">
        {
          switchAuth? 
          <SignIn switchToSignIn={toggleAuth}/>: <LogIn switchToSignIn={toggleAuth}/>
        }
      <div style={{background:'black',width:'50%',color:'white',cursor:'pointer'}} className='grid authWelcomeDesign'>
 <h3> Welcome to Aura Attire</h3>
 <img src="../../../../Images/file.png" alt="" width={"200px"} className='logoinauth'/>
 <p onClick={toggleAuth}>
  {switchAuth ? 'LogIn exiting account':'Create  New Account'}
  </p>
  <button style={{background:"white",color:'black'}}>
  <FontAwesomeIcon icon={faGoogle}/>
    Google
    </button>
  <button style={{background:"red"}}>
   <FontAwesomeIcon icon={faEnvelope}/>
   Mail
  </button>
      </div>
      </div>
    </div>
  )
}

export default Auth
