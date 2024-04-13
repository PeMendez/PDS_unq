import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import '../styles/sectionsProfile.css'
import {
  FavoriteProductsSection
} from "./Sections";


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
      <section className="my-buys">
        {/*<h1>My Favs</h1>
        <div className="btn-group">
          <button className="btn-filled-dark btn-rounded">
          <i className="fas fa-heart"></i>
            Shop All Products
          </button>
        </div>*/}
        <div>
          <FavoriteProductsSection />
        </div>
      </section>
    );
  };

  const MyBuys = () => {

  const mockFavoriteProducts = [];

    return (
        <section className="my-buys">
          <h2>My Buys</h2>
        {mockFavoriteProducts.length > 0 ? (
          <ul className="favorite-products">
            {mockFavoriteProducts.map((product, index) => (
              <li className="card-large card-dark card-wide" id="serv-groom" key={index}>
                <div className="card-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="card-content">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <Button variant="outline-dark">View Details</Button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="no-favorites">
            <p>You haven't bought any product yet.</p>          
            <Link to="/products" className="a-buys">
              <button className="btn-outline-dark btn-rounded">
                <i className="fas fa-shopping-cart"></i>
                Shop
              </button>
            </Link>
          </div>            
        )}
      </section>
    );
};


export { MyProfile, MyFavs, MyBuys };