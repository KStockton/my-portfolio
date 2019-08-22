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
        <article>
          <h3 className='card-title'>Synonyms</h3>
          <p className='card-body'>A Thesaurus in Vue</p>
        </article>
        <article>
          <h3 className='card-title'>Trapper Keeper</h3>
          <p className='card-body'>Keep up with Todo List</p>
        </article>
        <article>
          <h3 className='card-title'>Newswired</h3>
          <p className='card-body'>Keep up with the latest news</p>
        </article>
        <article>
          <h3>Pocket Ramiro</h3>
          <p className='card-body'>Track a facility</p>
        </article>
        <article>
          <h3>Movie Tracker</h3>
          <p className='card-body'>View and save the latest movies</p>
        </article>
        <article>
          <h3>Climb On</h3>
        </article>
      </section>
      <footer>
        <article>Michael KS</article>
        <article>Big Brother Big Sister</article>
        <article>Contact Me</article>
      </footer>
    </div>
  )

}

export default Home