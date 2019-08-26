import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioInfo } from '../../Util/Projects';
const shortid = require('shortid');

const Footer = () => {

  return (
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
        <Link to='/contact'>
          <div>
            <p>
              <i className="fas fa-envelope"></i>
              Contact Me
            </p>
          </div> 
        </Link>
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
    </footer>
  );
};

export default Footer;