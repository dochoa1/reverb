import React, { Component } from 'react';
import './socials.css';

class Socials extends Component {
  render() {
    return (
      <div className="socials">
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossOrigin="anonymous"></link>
          <div id="socials-list">
            <a href="mailto:danny@dannyochoa.net" id="mail"><i className="fas fa-envelope fa-2x font-awesome"></i></a>
            <a href="https://github.com/dochoa1" id="github" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-2x font-awesome"></i></a>
            <a href="https://www.linkedin.com/in/daniel-ochoa-8b2416a9/" id="linkedin" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-2x font-awesome"></i></a>
            <a href="https://www.strava.com/athletes/71613920" id="strava" target="_blank" rel="noopener noreferrer"><i className="fab fa-strava fa-2x font-awesome"></i></a>
          </div>
       </div>
    );
  }
}

export default Socials;