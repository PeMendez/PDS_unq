import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import '../styles/sections.css';
import { MyProfile } from './SectionsProfile';


const Profile  = () => {

    return (   
      <div> 
        <header>
            <div className="banner">Welcome! {}</div>
            <nav>
            <div id="logo">
              <img src= "./pin_and_buy.png"/> 
                Pin & Buy <br />Store
            </div>
            <ul className="navigation-menu">
              <li>
                <a href="#">My Profile</a>
              </li>
              <li>
                <a href="#">Favs</a>
              </li>
              <li>
                <a href="#">Buys</a>
              </li>
            </ul>
            </nav>
      </header>
      <MyProfile/>
      </div>
    );
  };


export default Profile;