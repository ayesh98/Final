import React, { Component } from 'react';
import Resort1 from '../../images/trainer 1.jpg';
import Resort2 from '../../images/trainer 2.jpg';
import Resort3 from '../../images/trainer 3.jpg';
import { HashLink as Link } from 'react-router-hash-link';

class Popular extends Component {
  render() {
    return (
      <section id="adventure" className="section section-popular scrollspy">
        <div className="container">
          <div className="row">
            <h4 className="center">
              <span className="purple-text darken-1">FitLAnka</span> Trainers</h4>
            <div className="col s12 m4">
              <div className="card">
                <div className="card-image">
                  <img src={Resort1} alt="" />
                  <span className="card-title">Mahesh</span>
                  <Link class="btn-floating activator halfway-fab waves-effect waves-light purple" href="#"><i class="material-icons">add</i></Link>
                </div>
                <div className="card-content">
                  <p>Mahesh is a Good athlete and a personal fitness trainer.
                  </p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">Mahesh<i class="material-icons right">close</i></span>
                  <p>Here is some more information about this Trainer</p>
                </div>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card">
                <div className="card-image">
                  <img src={Resort2} alt="" />
                  <span className="card-title">Kasun</span>
                  <Link class="btn-floating activator halfway-fab waves-effect waves-light purple"><i class="material-icons">add</i></Link>
                </div>
                <div className="card-content">
                  <p>jbkahka.lfaljkl;afkl abdjkadhalkjl/k bajdlh
                  </p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">Kasun<i class="material-icons right">close</i></span>
                  <p>Here is some more information about this trainer</p>
                </div>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card">
                <div className="card-image">
                  <img src={Resort3} alt="" />
                  <span className="card-title">Amandi</span>
                  <Link class="btn-floating activator halfway-fab waves-effect waves-light purple"><i class="material-icons">add</i></Link>
                </div>
                <div className="card-content">
                  <p>adglglah hbdlglagl vsaddkjb hasdgldsdl
                  </p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">Amandi<i class="material-icons right">close</i></span>
                  <p>Here is some more information about this trainer</p>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </section>
    );
  }
}

export default Popular;