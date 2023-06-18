import React from "react";
import Hero from "./Home/Hero";
import BooksPanel from "./Home/BooksPanel";
import CustomerFeeds from "./Home/CustomerFeeds";
import Authors from "./Home/Authors";
import Partners from "./Home/Partners";
import Blogs from "./Home/Blogs";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <BooksPanel />
      <CustomerFeeds />
      <Authors />
      <Partners />
      <Blogs />
    </div>
  );
};

export default HomePage;
