import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import { webpageInfo } from '../../Util/webpageInfo';
const shortid = require('shortid');

const Home = () => {

  const [ selected, setSelected ] = useState(false);



  return (
    <div>
      <main>
        <header className='name-title'>
          <h1>Michael King-Stockton</h1>
          <p>Build <strong>|</strong> Collaborate <strong>|</strong> Care <strong>|</strong> Repeat</p>
        </header>
        <ul>
          { webpageInfo.resourceLinks.map(item =>
            <a href={item.link} key={shortid.generate()}>
              <li>
                <i className={item.classname}></i>
              </li>
            </a>
          )}
        </ul>
        <section >
          { webpageInfo.projects.map((project, index) => 
            <article id={`projects${index}`} key={shortid.generate()}>
              <h3 className='card-title'>
                { project.name }
              </h3>
              <p>{ project.description }</p>
              <ul className='project-links'>
                <a href={ project.gitHubLink } key={shortid.generate()}>
                  <li>
                    <h4>Source</h4>
                  </li>
                </a>
                {/* <button hidden onClick={() => setSelected(true)}>Tech Stack</button>
          {selected ? <p >More Details</p> : <p>false</p>} */}
                <a href={ project.liveLink }>
                  <li className='live'>
                    <h4>Live</h4>
                  </li>
                </a>
              </ul>
            </article>
          )}
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default Home;