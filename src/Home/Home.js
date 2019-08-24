import React from 'react';
import resume from '../assets/Michael_King-Stockton_Resume.pdf';
import { portfolioInfo } from '../Util/Projects';

const Home = () => {


  

  return (
    <div>
      <main>
          <header className='name-title'>
            <h1>Michael King<span>-</span>Stockton</h1>
          </header>
        <ul className="resource-links">
          { portfolioInfo.resourceLinks.map((item, index) =>
            <a href={item.link} key={index}>
              <li>
                <i className={item.classname}></i>
              </li>
            </a>
          )}
        </ul>
        <section>
          { portfolioInfo.projects.map((project, index) => 
            <a href={ project.link }>
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
              { portfolioInfo.activities.map((activity, index))

              }
              <li>
                <i className="fas fa-basketball-ball"></i>
              </li>
              <li>
                <i className="fas fa-hands-helping"></i>
              </li>
              <li>
                <i className="fas fa-book"></i>
              </li>
              <li>
                <i className="fas fa-hiking"></i>
              </li>
              <li>
                <i className="fas fa-plane"></i>
              </li>
              <li>
                <i className="fas fa-football-ball"></i>
              </li>
              <li>
                <i className="fas fa-puzzle-piece"></i>
              </li>
              <li>
                <i className="fas fa-dog"></i>
              </li>
            </ul>
        </section>
        <section>
          <p><i className="fas fa-envelope"></i>Contact Me</p>
        </section>
        <section>
          <p>This Project was build using</p>
          <i className="fab fa-react"></i>
          <i className="fab fa-sass"></i>
          <p>Copyright &#169; 2019 Michael King-Stockton</p>
        </section>
      </footer>
    </div>
  )

}

export default Home