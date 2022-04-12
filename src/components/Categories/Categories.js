import React, { useEffect, useContext } from "react";
import { myContext } from "../Context/Context";
import "./Categories.scss";
const Categories = () => {
  const { fetchCategoriesMeals, categories } = useContext(myContext);

  useEffect(() => {
    fetchCategoriesMeals();
  }, [fetchCategoriesMeals]);

  return (
    <div className="categories">
      {categories.map((category) => (
        <div key={category.idCategory}>
          <img src={category.strCategoryThumb} alt="" />
          <h4>{category.strCategory}</h4>
        </div>
      ))}
    </div>
  );
};

export default Categories;
