import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import '../styles/sectionsProfile.css'


const MyProfile = () => {
  return (
    <section className="profile">
      <h1>My Profile</h1>
      <div className="btn-group">
        <button className="btn-filled-dark btn-rounded">
        <i className="fas fa-pencil-alt"></i>
          Edit
        </button>
      </div>
    </section>
  );
};

const MyFavs = () => {
    return (
      <section className="hero">
        <h1>Your One-Stop Store for All Your Needs!</h1>
        <div className="btn-group">
          <button className="btn-filled-dark">
          <i className="fas fa-shopping-cart"></i>
            Shop All Products
          </button>
        </div>
      </section>
    );
  };

  const MyBuys = () => {
    return (
      <section className="hero">
        <h1>Your One-Stop Store for All Your Needs!</h1>
        <div className="btn-group">
          <button className="btn-filled-dark">
          <i className="fas fa-shopping-cart"></i>
            Shop All Products
          </button>
        </div>
      </section>
    );
  };

export { MyProfile, MyFavs, MyBuys };