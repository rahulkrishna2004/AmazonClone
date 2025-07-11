import React, { useState } from "react";
import ExploreCategories from "../Components/ExploreCategories/ExploreCategories";
import ProductDisplay from "../ProductDisplay/ProductDisplay";

const Catogories = () => {
    const [category, setCategory] = useState("All");
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-6 px-4 md:px-10 mt-6">
        <div className="md:w-60">
          <ExploreCategories category={category} setCategory={setCategory} />
        </div>

        <div className="flex-1">
          <ProductDisplay category={category} />
        </div>
      </div>
    </div>
  );
};

export default Catogories;
