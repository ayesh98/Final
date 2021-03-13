import React, { Component } from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';


class Explore extends Component {
  render() {
    return (
      <section id="explore" className="section section-icons grey lighten-4 center">
        <div className="container">
          <div className="row">
          <h4 className="center">
              <span className="purple-text darken-1">Explore</span> FitLanka</h4>
            <div className="col s6 m3">
              <div className="card-panel">
                <i className="material-icons medium purple-text">trainers</i>
                <h4>Trainers</h4>
                <p>ddgdgdfgs.</p>
              </div>
            </div>
            <div className="col s6 m3">
              <div className="card-panel">
                <i class="material-icons medium purple-text">articles</i>
                <h4>Articles</h4>
                <p>sfsdfsfsdfs.</p>
              </div>
            </div>
            <div className="col s6 m3">
              <div className="card-panel">
                <i className="material-icons medium purple-text">test</i>
                <h4>Ask anything</h4>
                <p>gfxhxxhhg.</p>
              </div>
            </div>
            <div className="col s6 m3">
              <div className="card-panel">
                <i className="material-icons medium purple-text">shopping_basket</i>
                <h4>Services</h4>
                <p>fjgkjk;lk;lkl;lk</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Explore;