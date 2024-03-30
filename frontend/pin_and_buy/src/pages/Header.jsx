import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

const Header = () => {

    const isAuth = !!localStorage.getItem("authorization_token");
    const navigate = useNavigate();
    
    function handleIconClick() {
        if (isAuth){
            navigate("/");
        }else{          
            navigate("/login");
        }
    }
    
  return (
    <header>
      <div className="banner">Get free delivery on orders over $80</div>
      <nav>
        <div id="logo">
            <img src= "./pin_and_buy.png"/> 
          Pin & Buy <br />Store
        </div>
        <ul className="navigation-menu">
  <li>
    <a href="#">Products</a>
    <ul className="subnav">
      <li>
        <a href="#">
        <Button variant="outline-dark">Accesorios para vehículos</Button>
        </a>
      </li>   
      <li>
        <a href="#">
        <Button variant="outline-dark">Bla bla</Button>
        </a>
      </li>          
      <li>
        <a href="#">
        <Button variant="outline-dark">Blu blu</Button>
        </a>
      </li>                     
    </ul>
  </li>
  <li>
    <a href="#">My Account</a>
    <ul className="subnav">
      <li className="card-med" id="sup-fav">
        <div className="card-image">         
            <img src='./favs.png'/>   
        </div>
        <a href="#">
          <span>My Favs</span>
          <Button variant="outline-dark">Show All</Button>
        </a>
      </li>              
      <li className="card-med" id="sup-buy">
        <div className="card-image">
          <img src="buys.png" />
        </div>
        <a href="#">
          <span>My Buys</span>
          <Button variant="outline-dark">Show All</Button>
        </a>
      </li>              
    </ul>
  </li>
</ul>


        <div id="utility">
            <i className="fas fa-search"></i>
            <i className="fas fa-shopping-cart"></i>
            <span onClick={handleIconClick}>
              <i className='fas fa-user user'></i>
            </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
