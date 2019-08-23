import React from 'react';

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
          <i class="fab fa-github"></i>
        </li>
          </a>
          <a href="https://www.linkedin.com/in/michaelkingstockton/">
        <li>
          <i class="fab fa-linkedin-in"></i>        
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
            <p>NBA Draft players and Teeams</p>
          </article>
        </a>
      </section>
      <footer>
        <p>About Me</p>
        <article>Big Brother Big Sister</article>
        <article>Contact Me</article>
        <p>This Project was build using</p>
        <i class="fab fa-react"></i>
        <i class="fab fa-sass"></i>
        <p>Copyright &#169; 2019 Michael King-Stockton</p>
      </footer>
    </div>
  )

}

export default Home