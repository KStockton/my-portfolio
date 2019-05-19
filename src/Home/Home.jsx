import React from 'react';
import './Home.scss';
import { faGithub, faLinkedin } from '@fortawesome/fontawesome-free-brands';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// import fontawesome from '@fortawesome/fontawesome';
// fontawesome.library.add(faFreeSolid);
// fontawesome.dom.i2svg()


const Home = () => {

  return (
    <div id="Home">
      <div className="Home-wrapper">
      <h1>Welcome</h1>
      <a href="https://github.com/KStockton">
        <FontAwesomeIcon className="Home-fontawesome" icon={faGithub}/> 
      </a>
      <a href="https://www.linkedin.com/in/michaelkingstockton/">
        <FontAwesomeIcon  className="Home-fontawesome" icon={faLinkedin}/>
      </a>
      </div >

    </div>
  )

}

export default Home