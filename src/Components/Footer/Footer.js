import React from 'react';
import { Link } from 'react-router-dom';
import formik from '../../assets/formik.png';
import awsLambda from '../../assets/awsLambda.png';
import awsgateway from '../../assets/awsgateway.png';
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
            {/* born and raised in denver, colorado. I have a background in chemistry andc */}
            {/* have been an entrpreneur sourcing private label items and selling them on Amazon.  */}
            
            i am a software engineer who loves the never-ending challenge between art, 
            analysis, creativity, and code. i am seeking a software engineering position on 
            an agile team that blends the never-ending challenge of complex problem solving 
            with open-minded curiosity.
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
      <aside>
        <p>This page was built and deployed with:</p>
        <ul> 
          <li>
            <i className="fab fa-aws"></i>
          </li>   
          <li>
            <i className="fab fa-react"></i>
          </li>
          <li>
            <i className="fab fa-sass"></i>
          </li>
          <li>
            <img src={formik} alt='formik-logo'/>
          </li>
          <li>
            <img src={awsLambda} alt='aws lambda icon'/>
          </li>
          <li>
            <img src={awsgateway} alt='aws gateway api icon'/>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Footer;