import React, { useState } from "react";
import Header from "./Header";
import {
    MainSection,
    ShopByCategorieSection,
    FavoriteProductsSection,
    LocationHoursSection,
  } from "./Sections";
import "../styles/sections.css";
 
const HomePage = () => {

return (
    <div>
    <Header />
    <MainSection />
    <ShopByCategorieSection />
    <FavoriteProductsSection />
    <LocationHoursSection />

  </div>
)
};

export default HomePage;
