import React from 'react';
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
        <section>
          { portfolioInfo.projects.map(project => 
            <a href={ project.link } key={shortid.generate()}>
              <article>
                <h3 className='card-title'>
                  { project.name }
                </h3>
                <p>{ project.description }</p>
              </article>
            </a>
          )}
        </section>
      </main>
    </div>
  );
};

export default Home;