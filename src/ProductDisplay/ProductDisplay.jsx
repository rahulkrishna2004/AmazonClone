import React, { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import Productitem from "../ProductItem/Productitem";
import { ThemeContext } from "../Context/ThemeContext";
import LoadingSpinner from "../Components/LoadingSpinner ";
import Filter from "../Components/Filter/Filter";

const ProductDisplay = ({ category = "All" }) => {
  const { allAccessories } = useContext(StoreContext);
  const { theme } = useContext(ThemeContext);

  if (!allAccessories || !Array.isArray(allAccessories)) {
    return (
      <div className="text-center py-20 text-gray-500 text-lg">
        <LoadingSpinner/>
      </div>
    );
  }

  const filteredItems =
    category === "All"
      ? allAccessories
      : allAccessories.filter((item) => item.category === category);

  return (
    <div className="display px-2 sm:px-4 py-6 max-w-7xl mx-auto">
      {/* <Filter/> */}
      <h1 className={`text-2xl font-bold mb-8 text-center tracking-tight
        ${theme === "dark" ? "text-yellow-400" : "text-gray-800"}`}>
        {category === "All" ? "All Products" : `${category} Products`}
      </h1>

      {filteredItems.length === 0 ? (
        <div className="text-center text-gray-500 text-md py-10">
          No products found in this category.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-7">
          {filteredItems.map((item) => (
            <Productitem
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              description={item.description}
              category={item.category}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductDisplay;