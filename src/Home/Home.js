import React from 'react';
import { faGithub, faLinkedinIn } from '@fortawesome/fontawesome-free-brands';
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
          <FontAwesomeIcon  className="Home-fontawesome" icon={faLinkedinIn}/>
        </li>
          </a>
      </ul>
      <section>
        <a href='https://github.com/KStockton/Vue.js-Synonyms-v1'>
          <article>
            <h3 className='card-title'>Synonyms</h3>
            <p className='card-body'>A Thesaurus in Vue</p>
          </article>
        </a>
        <a href='https://github.com/KStockton/Trapper-Keeper'>
          <article>
            <h3 className='card-title'>Trapper Keeper</h3>
            <p className='card-body'>Keep up with Todo List</p>
          </article>
        </a>
        <a href='https://github.com/KStockton/Newswired'>
          <article>
            <h3 className='card-title'>Newswired</h3>
            <p className='card-body'>Keep up with the latest news</p>
          </article>
        </a>
        <a href='https://github.com/KStockton/pocket_ramiro_react'>
          <article>
            <h3>Pocket Ramiro</h3>
            <p className='card-body'>Track a facility</p>
          </article>
        </a>
        <a href='https://github.com/KStockton/Movie-Tracker'>
          <article>
            <h3>Movie Tracker</h3>
            <p className='card-body'>View and save the latest movies</p>
          </article>
        </a>
        <a href='https://github.com/KStockton/climb-on'>
          <article>
            <h3>Climb On</h3>
            <p>View the closest climbing trails</p>
          </article>
        </a>
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