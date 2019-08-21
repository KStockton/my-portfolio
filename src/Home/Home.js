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
          <a href="https://github.com/KStockton">
        <li>
          <FontAwesomeIcon className="Home-fontawesome" icon={faGithub}/> 
        </li>
          </a>
          <a href="https://www.linkedin.com/in/michaelkingstockton/">
        <li>
          <FontAwesomeIcon  className="Home-fontawesome" icon={faLinkedin}/>
        </li>
          </a>
      </ul>
      <section>
        <article>Vue.js</article>
        <article>Trapper Keeper</article>
        <article>Newswired</article>
        <article>Pocket Ramiro</article>
        <article>Movie Tracker</article>
      </section>
    </div>
  )

}

export default Home