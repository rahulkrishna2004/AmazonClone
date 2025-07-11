import React, { useState, useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

import Banner from "./Banner";
import ServiceIcons from "./ServiceIcons";
import { mobileAccessories } from "../../data/Accessories";
import ProductCard from "../ProductCard";
import SearchBar from "../SearchBar";
import { useFilteredProducts } from "../../hooks/useFilteredProducts";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const categories = [
    "All",
    ...new Set(mobileAccessories.map((p) => p.category)),
  ];

  const filteredProducts = useFilteredProducts(mobileAccessories, {
    search,
    category,
    minPrice,
    maxPrice,
  });

  return (
    <div
      className={`flex flex-col min-h-screen ${
        theme === "dark" ? "bg-black text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <Banner />
      <ServiceIcons />

      <div className="px-4 md:px-10">
        <h1 className="text-3xl font-bold text-center my-6">Product Store</h1>

        <SearchBar
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          categories={categories}
        />

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-center col-span-full text-lg">
              No products found.
            </p>
          )}
        </section>
      </div>
    </div>
  );
};

export default Home;
