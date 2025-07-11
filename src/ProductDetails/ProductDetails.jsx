import { useParams } from "react-router-dom";
import { mobileAccessories } from "../data/Accessories";
import Productitem from "../ProductItem/Productitem";
import { useContext, useState } from "react";
import { StoreContext } from "../Context/StoreContext";

const ProductDetail = () => {
  const { addToCart } = useContext(StoreContext);
  const [isAdding, setIsAdding] = useState(false);

  const { id } = useParams();
  const product = mobileAccessories.find((p) => p.id.toString() === id);

  if (!product) {
    return (
      <div className="p-6 text-center" style={{ color: "var(--text-color)" }}>
        <h2>Product Not Found</h2>
      </div>
    );
  }

  const relatedProducts = mobileAccessories.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  const handleAddToCart = (e) => {
    e.stopPropagation();
    setIsAdding(true);
    addToCart(String(id));
    setTimeout(() => {
      setIsAdding(false);
    }, 400);
  };

  return (
    <div
      className="p-6"
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-full max-h-96 p-5 object-contain rounded shadow"
          style={{ backgroundColor: "var(--card-bg)" }}
        />

        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="mb-4">{product.description}</p>
          <p
            className="text-xl font-semibold mb-4"
            style={{ color: "var(--primary)" }}
          >
            ₹{product.price}
          </p>

          <button
            onClick={handleAddToCart}
            disabled={isAdding}
            className={`w-full mt-2 px-2 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-base font-semibold rounded-lg shadow transition
              ${
                isAdding
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-yellow-400 hover:bg-yellow-500 text-black"
              }
            `}
          >
            {isAdding ? "Adding..." : "Add to Cart"}
          </button>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((item) => (
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
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
