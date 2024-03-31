import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import '../styles/sections';


const Profile  = () => {

    return (    
        <header>
            <div className="banner"></div>
            <nav>
            <div id="logo">
              <img src= "./pin_and_buy.png"/> 
                Pin & Buy <br />Store
            </div>
            <ul className="navigation-menu">
              <li>
                <a href="#">Favs</a>
              </li>
              <li>
                <a href="#">Buys</a>
              </li>
            </ul>
            </nav>
      </header>
    );
  };


export default Profile;