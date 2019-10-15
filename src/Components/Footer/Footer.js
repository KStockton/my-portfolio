import React from 'react';
import { Link } from 'react-router-dom';
import cloudfront from '../../assets/cloudfront_logo.jpg';
import formik from '../../assets/formik.png';
import awsLambda from '../../assets/awsLambda.png';
import awsgateway from '../../assets/awsgateway.png';
import sns from '../../assets/amazon_sns_logo.png';
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
              <span className='tab'>Michael King-Stockton is a</span> Denver,
              Colorado native and recent graduate from Turing School of Software 
              and Design. Michael has a passion for and enjoys software engineering 
              because of the never-ending challenge between art, analysis, creativity, 
              and code.<br/>
              <br/>
              <span className='tab'>Michael is seeking</span> a software engineering 
              position on an agile team that blends the challenge of complex 
              problem solving with open-minded curiosity. His background combines a 
              B.S. in Chemistry from Xavier University and employment experience that 
              includes UPS, customer service, and door-to-door sales. For the past eight 
              years, Michael has been a mentor with the Big Brother Big Sister Program 
              motivating children to strive for their brightest futures. In his spare time, 
              he enjoys hiking, movies, basketball, football, and reading, to name a few. 
              Thank you for visiting!
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
            <img src={formik} alt='formik logo'/>
          </li>
          <li>
            <img src={awsLambda} alt='aws lambda logo'/>
          </li>
          <li>
            <img src={awsgateway} alt='aws gateway logo'/>
          </li>
          <li>
            <img src={cloudfront} alt='aws cloudfront logo'/>
          </li>
          <li>
            <img src={sns} alt='aws simple notification service logo'/>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Footer;