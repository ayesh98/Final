import React, { Component } from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';

class Contact extends Component {
  render() {
    return (
      <section id="contact" className="section section-contact scrollspy">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <div className="card-panel purple white-text center">
                <i className="material-icons medium">email</i>
                <h5>FitLanka Address</h5>
                <p>Contacts us for more information.We are alavilable 24/7 for your service.</p>
              </div>
              <ul className="collection with-header">
                <li className="collection-header">
                  <h4>Main Office</h4>
                </li>
                <li className="collection-item">FitLanka PVT(LTD)</li>
                <li className="collection-item"><i class="fas fa-map-marker-alt"></i> No 16,Kegalle,Sri Lanka</li>
                <li className="collection-item"><i class="fas fa-phone"></i> (035) 5674473</li>
                <li className="collection-item"><i class="fas fa-envelope-square"></i> fitlanka@gmail.com</li>
              </ul>
            </div>
            <div className="col s12 m6">
              <div className="card-panel grey lighten-3">
                <h5>Please fill out this form</h5>
                <form>
                  <div className="input-field">
                    <input type="text" id="name" className="validate" />
                    <label for="name" className="purple-text">Name</label>
                  </div>
                  <div className="input-field">
                    <input type="email" id="email" />
                    <label for="email" className="purple-text">Email</label>
                  </div>
                  <div className="input-field">
                    <input type="text" id="phone" />
                    <label for="phone" className="purple-text">Phone</label>
                  </div>
                  <div className="input-field">
                    <textarea className="materialize-textarea" id="message" data-length="120"></textarea>
                    <label for="message" className="purple-text">Message</label>
                  </div>
                  <input type="submit" value="Submit" className="btn purple" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;