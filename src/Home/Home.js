import React from 'react';
import { faGithub, faLinkedin } from '@fortawesome/fontawesome-free-brands';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Home = () => {

  return (
    <div id="home">
        <header>
          <h1>Michael</h1>
          <p>King<span>-</span>Stockton</p>
        </header>
      <ul className="resource-links">
        <li>
          <a href="https://github.com/KStockton">
          <FontAwesomeIcon className="Home-fontawesome" icon={faGithub}/> 
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/michaelkingstockton/">
          <FontAwesomeIcon  className="Home-fontawesome" icon={faLinkedin}/>
          </a>
        </li>
      </ul>
    </div>
  )

}

export default Home