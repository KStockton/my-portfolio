import React from 'react';
import './Home.scss';
import { faGithub, faLinkedin } from '@fortawesome/fontawesome-free-brands';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Home = () => {

  return (
    <div id="Home">
      <div className="Home-wrapper">
      <h1>Welcome</h1>
      <p>Michael</p>
      <p><span>King-Stockton</span></p>
      <ul>
      <li><a href="https://github.com/KStockton">
        <FontAwesomeIcon className="Home-fontawesome" icon={faGithub}/> 
      </a></li>
      <li><a href="https://www.linkedin.com/in/michaelkingstockton/">
        <FontAwesomeIcon  className="Home-fontawesome" icon={faLinkedin}/>
      </a></li>
      </ul>
      </div >

    </div>
  )

}

export default Home