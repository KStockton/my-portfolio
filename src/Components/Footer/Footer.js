import React from 'react';
import { Link } from 'react-router-dom';
import formik from '../../assets/formik.png';
import awsLambda from '../../assets/awsLambda.png';
import awsgateway from '../../assets/awsgateway.png';
import { webpageInfo } from '../../Util/webpageInfo';
const shortid = require('shortid');

const Footer = () => {

  return (
    <div>
      <footer>
        <section className='one'>
          <h2>About Me</h2>
          <div>
            <blockquote>
              I am a Denver, Colorado Native, and recent graduate from Turing 
              School of Software and Design. I have a passion for software 
              engineer because I enjoy the never-ending challenge between art, 
              analysis, creativity, and code. <br></br> I am seeking a software engineering 
              position on an agile team that blends the never-ending challenge of 
              complex problem solving with open-minded curiosity. My background 
              ranges from a BS in Chemistry, UPS, Customer Service to Door to 
              Door sells. For the past 8 years, I have been a mentor with kids 
              in Big Brother Big Sister. Other times I enjoy hiking, movies, 
              basketball, football, reading, to name a few. Thanks for visiting!
            </blockquote>
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
            { webpageInfo.activities.map(activity =>
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