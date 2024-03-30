import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const MainSection = () => {
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

const ShopByCategorieSection = () => {
  return (
    <section>
      <h2>Shop by most popular categories</h2>
      <ul className="shop-products">
        <li className="card-large card-light" id="sup-electronics">
          <div className="card-image">
            <img src="./electronics.png"/>
          </div>
          <ul>
            Electronics
            <li><a href="#">Smartphones</a></li>
            <li><a href="#">Laptops</a></li>
            <li><a href="#">TVs</a></li>
            <Button variant="outline-light">
              Shop All <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </ul>
        </li>
        <li className="card-large card-dark" id="sup-fashion">
          <div className="card-image">
            <img src="./fashion.png"/>
          </div>
          <ul>
            Fashion
            <li><a href="#">Clothing</a></li>
            <li><a href="#">Shoes</a></li>
            <li><a href="#">Accessories</a></li>
            <Button variant="outline-light">
              Shop All <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </ul>
        </li>
        <li className="card-large card-dark" id="sup-home">
          <div className="card-image">
            <img src="./home.png"/>
          </div>
          <ul>
            Home &amp; Garden
            <li><a href="#">Furniture</a></li>
            <li><a href="#">Decor</a></li>
            <li><a href="#">Kitchen Appliances</a></li>
            <Button variant="outline-dark">
              Shop All <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </ul>
        </li>
        <li className="card-large card-light" id="sup-sports">
          <div className="card-image">
            <img src="./sports.png"/>
          </div>
          <ul>
            Sports &amp; Outdoors
            <li><a href="#">Fitness Equipment</a></li>
            <li><a href="#">Outdoor Gear</a></li>
            <li><a href="#">Sportswear</a></li>
            <Button variant="outline-light">
              Shop All <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default ShopByCategorieSection;

const FavoriteProductsSection = () => {

  const mockFavoriteProducts = [
   
  ];

  return (
    <section>
      <h2>My Favorite Products</h2>
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
          <p>You haven't added any favorite products yet.</p>
          <Link to="/products">
            <Button variant="outline-dark">Explore Products</Button>
          </Link>
        </div>
      )}
    </section>
  );
};

const LocationHoursSection = () => {
  return (
    <section id="locate">
      <div>
        <h2>Discover and Shop</h2>
        <p>
          Explore our diverse range of products from various categories. 
          Whether you're looking for electronics, fashion, home goods, or more,
          you'll find it all here.
        </p>
        <div className="btn-group">
          <button className="btn-filled-dark">
            Browse Products
          </button>
          <button className="btn-outline-dark btn-hover-color">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export { MainSection, ShopByCategorieSection, FavoriteProductsSection, LocationHoursSection };
