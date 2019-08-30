import React from 'react';
import Footer from '../Footer/Footer';
import { portfolioInfo } from '../../Util/Projects';
const shortid = require('shortid');

const Home = () => {

  return (
    <div>
      <main>
        <header className='name-title'>
          <h1>Michael King<span>-</span>Stockton</h1>
        </header>
        <ul>
          { portfolioInfo.resourceLinks.map(item =>
            <a href={item.link} key={shortid.generate()}>
              <li>
                <i className={item.classname}></i>
              </li>
            </a>
          )}
        </ul>
        <section >
          { portfolioInfo.projects.map((project, index) => 
            <article id={`projects${index}`}>
              <h3 className='card-title'>
                { project.name }
              </h3>
              <p>{ project.description }</p>
              <a href={ project.link } key={shortid.generate()}>
                <i className='fab fa-github'></i>
              </a>
            </article>
          )}
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default Home;