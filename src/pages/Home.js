import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Popular from "../components/Popular";
import "../style/Home.css";
import { BsSearch } from "react-icons/bs";
import axios from "axios";

function Home() {
  const [recipe, setRecipe] = useState([]);

  const handleGetResponse = async () => {
    try {
       // Popular Recipe
       const popularRecipe = await axios.get(
        "https://4b8a-103-144-170-9.ngrok-free.app/latestrecipe",
        {
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        }
      );
  
      if (popularRecipe.status === 200) {
        setRecipe(popularRecipe.data);
        console.log(setRecipe)
      }
  
      // Latest
    } catch (error) {
      console.log(error);
    }
  };
  
  React.useEffect(() => {
    handleGetResponse();
  }, []);
  return (
    <>
      {/* Header Part */}
      <div className="main-box">
        <Navbar />
        <nav className="nav-box">
          <div
            className="hero-left"
          >
            <h1>
              Discover Recipe <br /> & Delicious Food
            </h1>
            <div className="hero-input">
              <BsSearch />
              <input type="text" placeholder="Search Recipe"></input>
            </div>
          </div>
          <div className="hero-right">
            <img src="/images/food-hero.png" />
          </div>
        </nav>
      </div>

      {/* Popular */}
      <section className="popular-box">
        <div className="title-head">
          <span className="orange-vertical"></span>
          <p>Popular For You !</p>
        </div>
        <div className="popular-img">
          <div className="inner-text">
            <p>Pizza Lamoa</p>
            <img src="/images/pizza.png" />
          </div>
          <div className="inner-text">
            <p>King Burger</p>
            <img src="/images/kingburger.png" />
          </div>
        </div>
      </section>

      {/* New Recipe */}
      <section className="recipe-box">
        <div className="title-head">
          <span className="orange-vertical"></span>
          <p>New Recipe</p>
        </div>
        <div className="recipe-img row align-items-center">
          <div className="recipe-left col-md-6">
            <div className="recipe-left-img">
              <img src="/images/onionburger.png" />
            </div>
            <div className="recipe-orange"></div>
          </div>
          <div className="recipe-right col-md-6">
            <h1>
              Healthy Bone Broth <br /> Ramen (Quick&Easy)
            </h1>
            <hr />
            <p>
            Would you like to learn how to make it? <br/> You can access a more detailed version of this recipe, <br/> which includes step-by-step instructions.
            </p>
            <button type="button" className="btn btn-warning text-white">
              Learn More
            </button>
          </div>
        </div>
      </section>
      {/* Popular Recipe */}
      <div className="popular-recipe">
        <div className="title-head">
          <span className="orange-vertical"></span>
          <p>Popular Recipe</p>
        </div>

        
        <div className="menu-box">
          {recipe.slice(0, 5).map((item) => (
            <Popular
            title={item.title}
            image={item.image}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
