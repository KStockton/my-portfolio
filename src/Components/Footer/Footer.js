import React from 'react';
import { Link } from 'react-router-dom';
import formik from '../../assets/formik.png';
import { portfolioInfo } from '../../Util/Projects';
const shortid = require('shortid');

const Footer = () => {

  return (
    <div>
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
          <Link to='/contact/#forms'>
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
      <section id='website-info'>
        <p>This page was built and deployed with:</p>
        <ul> 
          <li>
            <i class="fab fa-aws"></i>
          </li>   
          <li>
            <i class="fab fa-react"></i>
          </li>
          <li>
            <i class="fab fa-sass"></i>
          </li>
          <li>
            <img src={formik} alt='formik-logo'/>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Footer;