import React from "react";
import "../styles/Home.css";
import Product from "./Product";
//import Grid from "@material-ui/core/Grid"
const firstProductImg =
  "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="intro"
          className="home__image"
        />
        <div className="home__row">
          <Product
            id="111"
            title="The lean startup first edition"
            price={29.99}
            image={firstProductImg}
            rating={5}
          />
          <Product
            id="222"
            title="The lean startup second edition"
            price={29.99}
            image={firstProductImg}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
          id="333"
            title="The lean startup third edition"
            price={29.99}
            image={firstProductImg}
            rating={5}
          />

          <Product
          id="452355"
            title="The lean startup 4-th edition"
            price={29.99}
            image={firstProductImg}
            rating={5}
          />

          <Product
          id="523552"
            title="The lean startup 5-th edition"
            price={29.99}
            image={firstProductImg}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
          id="523454"
            title="The lean startup"
            price={29.99}
            image={firstProductImg}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
