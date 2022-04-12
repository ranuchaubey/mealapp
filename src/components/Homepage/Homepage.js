import React, { useState, useCallback, useContext } from "react";
import "./Homepage.scss";
import { myContext } from "../Context/Context";
const Homepage = () => {
  const [searchmeal, setSearchMeal] = useState("");

  const { fetchHomePageMeals, meals } = useContext(myContext);

  const fetchMealshandler = useCallback(() => {
    fetchHomePageMeals(searchmeal);
  }, [searchmeal, fetchHomePageMeals]);

  return (
    <div className="home">
      <div className="home-search">
        <input
          type="text"
          placeholder="Search your meal..."
          value={searchmeal}
          onChange={(e) => setSearchMeal(e.target.value)}
        />
        <button onClick={fetchMealshandler}>Search Meal</button>
      </div>
      <div className="home-grid">
        {meals ? (
          meals.map((meal) => (
            <div className="home-meal" key={meal.idMeal}>
              <img src={meal.strMealThumb} alt="" />
              <h4>{meal.strMeal}</h4>
            </div>
          ))
        ) : (
          <h2>No meals Found Try another word!</h2>
        )}
      </div>
    </div>
  );
};

export default Homepage;
