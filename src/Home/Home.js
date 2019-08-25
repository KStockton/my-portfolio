import React from 'react';
import { portfolioInfo } from '../Util/Projects';
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
      <footer>
        <section className='one'>
          <h2>About Me</h2>
         <div>
          <p>
            Born and raised in Denver, Colorado.
            I am a Software Engineer who loves the never ending challenge between art, analysis,
            creativity, and code. I am seeking a software engineering position on an agile team that
            blends the never-ending challenge of complex problem solving with
            open minded curiosity.
          </p>
         </div>
        </section>
        <section>
            <h2>Activities</h2>
            <ul>
              { portfolioInfo.activities.map(activity =>
                <li key={shortid.generate()}>
                  <i className={activity.classname}></i>
                </li>
              )}
            </ul>
        </section>
        <section>
          <div>
            <p>
              <i className="fas fa-envelope"></i>
              Contact Me
            </p>
          </div> 
        </section>
      </footer>
    </div>
  )

}

export default Home