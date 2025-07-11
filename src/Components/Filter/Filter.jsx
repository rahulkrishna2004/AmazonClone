import { useState } from "react";
import { mobileAccessories } from "../../data/Accessories";
import Productitem from "../../ProductItem/Productitem";


export default function Filter() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // 🔍 Filter logic
  const filteredProducts = mobileAccessories.filter((product) => {
    const matchSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "All" || product.category === category;
    const matchMin = minPrice === "" || product.price >= parseInt(minPrice);
    const matchMax = maxPrice === "" || product.price <= parseInt(maxPrice);
    return matchSearch && matchCategory && matchMin && matchMax;
  });

  // 🗂️ Unique categories
  const categories = ["All", ...new Set(mobileAccessories.map((p) => p.category))];

  return (
    <div style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}>
      {/* 🔎 Filters */}
      <div className="px-6 py-4 grid grid-cols-1 md:grid-cols-4 gap-4 items-end" style={{ backgroundColor: "var(--card-bg)" }}>
        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-3 py-2 border rounded"
          style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)", borderColor: "var(--text-color)" }}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-3 py-2 border rounded"
          style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)", borderColor: "var(--text-color)" }}
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="px-3 py-2 border rounded"
          style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)", borderColor: "var(--text-color)" }}
        />

        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="px-3 py-2 border rounded"
          style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)", borderColor: "var(--text-color)" }}
        />
      </div>

      {/* 🛍️ Product Grid */}
      <section className="px-6 py-8">
        <h2 className="text-2xl font-bold mb-4">Products</h2>

        {filteredProducts.length === 0 ? (
          <p style={{ color: "var(--text-color)" }}>No products found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Productitem key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
