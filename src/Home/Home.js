import React from 'react';
import resume from '../assets/Michael_King-Stockton_Resume.pdf';

const Home = () => {

  return (
    <div>
      <main>
          <header className='name-title'>
            <h1>Michael King<span>-</span>Stockton</h1>
          </header>
        <ul className="resource-links">
          <a href="https://github.com/KStockton">
            <li>
              <i class="fab fa-github"></i>
            </li>
          </a>
          <a href="https://www.linkedin.com/in/michaelkingstockton/">
            <li>
              <i class="fab fa-linkedin-in"></i>        
            </li>
          </a>
          <a href={resume} download>
            <li>
              <i class="far fa-file-pdf"></i>
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
          <a href='https://github.com/KStockton/Build-Your-Own-Backend'>
            <article>
              <h3>Backend NBA Draft 2019</h3>
              <p>NBA Draft Players and Teams in Express</p>
            </article>
          </a>
          <a href='https://github.com/KStockton/swapi-box'>
            <article>
              <h3>Swapi Box</h3>
              <p>Star Wars API</p>
            </article>
          </a>
        </section>
      </main>
      <footer>
        <section className='one'>
          <h2>About Me</h2>
          <p id='info'>Born and raised in Denver, Colorado.
            I am a Software Engineer who loves the never ending challenge between art, analysis,
            creativity, and code. I am seeking a software engineering position on an agile team that
            blends the never-ending challenge of complex problem solving with
            open minded curiosity.
          </p>
        </section>
        <section>
            <h2>Activities</h2>
            <ul>
            <li>
              <i class="fas fa-basketball-ball"></i>
            </li>
            <li>
              <i class="fas fa-hands-helping"></i>
            </li>
            <li>
              <i class="fas fa-book"></i>
            </li>
            <li>
              <i class="fas fa-hiking"></i>
            </li>
            <li>
              <i class="fas fa-plane"></i>
            </li>
            <li>
              <i class="fas fa-football-ball"></i>
            </li>
            <li>
              <i class="fas fa-puzzle-piece"></i>
            </li>
            <li>
              <i class="fas fa-dog"></i>
            </li>
            </ul>
        </section>
        <section>
          <p><i class="fas fa-envelope"></i>Contact Me</p>
        </section>
        <section>
          <p>This Project was build using</p>
          <i class="fab fa-react"></i>
          <i class="fab fa-sass"></i>
          <p>Copyright &#169; 2019 Michael King-Stockton</p>
        </section>
      </footer>
    </div>
  )

}

export default Home