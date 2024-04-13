import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import '../styles/sections.css';
import { MyProfile, MyFavs, MyBuys } from './SectionsProfile';


const Profile  = () => {

  const [activeComponent, setActiveComponent] = useState('profile');

  const changeComponent = (component) => {
    setActiveComponent(component);
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'favs':
        return <MyFavs />;
      case 'buys':
        return <MyBuys />;
      case 'profile':
      default:
        return <MyProfile />;
    }
  };

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
                <a href="#" onClick={() => changeComponent('profile')}>My Profile</a>
              </li>
              <li>
                <a href="#" onClick={() => changeComponent('favs')}>Favs</a>
              </li>
              <li>
                <a href="#" onClick={() => changeComponent('buys')}>Buys</a>
              </li>
            </ul>
            </nav>
      </header>
      {renderActiveComponent()}
      </div>
    );
  };


export default Profile;