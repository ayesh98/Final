import React, { Component } from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import Imgone from '../../images/pic1.jpg';
import Imgtwo from '../../images/pic2.jpg';
import Imgthree from '../../images/pic3.jpg';
import './Banner.css';
import { Link } from 'react-router-dom';

class Banner extends Component {
  render() {
    return (
      <section className="slider" id="home">
        <ul className="slides">
          <li>
            <img src={Imgone} alt="Vacation" />
            <div className="caption center-align">
              <h2>Best Fitness Trainers in SriLanka</h2>
              <h5 className="light grey-text text-lighten-3 hide-on-small-only">Now you can find the best fitness trainers in one place</h5>
              <Link to="#" className="btn btn-large purple">Learn More</Link>
            </div>
          </li>
          <li>
            <img src={Imgtwo} alt="Budgets" />
            <div className="caption left-align">
              <h2>To a Healthy Lifestyle</h2>
              <h5 className="light grey-text text-lighten-3 hide-on-small-only">We will guid you to a healthy Lifestyle</h5>
              <Link to="#" className="btn btn-large purple">Learn More</Link>
            </div>
          </li>
          <li>
          <img src={Imgthree} alt="Getaways" />
            <div className="caption right-align">
              <h2>Ask about Fitness</h2>
              <h5 className="light grey-text text-lighten-3 hide-on-small-only">Ask anything about fitness from us</h5>
              <Link to="#" className="btn btn-large purple">Learn More</Link>
            </div>
          </li>
        </ul>
        
      </section>
    );
  }
}

export default Banner;