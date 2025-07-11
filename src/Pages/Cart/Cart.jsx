import React, { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  // ⬇️ Use allAccessories from context
  const { cartItem, allAccessories, addToCart, removeFromCart } =
    useContext(StoreContext);
  const navigate = useNavigate();

  // Calculate grand total
  const getTotalAmount = () => {
    let total = 0;
    for (let itemId in cartItem) {
      const product = allAccessories.find(
        (p) => String(p.id) === String(itemId)
      ); // match as string
      if (product) {
        total += product.price * cartItem[itemId];
      }
    }
    return total;
  };

  const DELIVERY_FEE = 59;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold mb-4">Your Cart</h1>

      {Object.keys(cartItem).length === 0 ? (
        <p className="text-gray-600 text-center mt-10">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {Object.entries(cartItem).map(([itemId, quantity]) => {
            const product = allAccessories.find(
              (p) => String(p.id) === String(itemId)
            );
            if (!product) return null;

            return (
              <div
                key={itemId}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 object-contain rounded"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/100";
                    }}
                  />
                  <div>
                    <h2 className="text-lg font-bold text-gray-800">
                      {product.name}
                    </h2>
                    <p className="text-sm text-gray-500">
                      {product.description}
                    </p>
                    <p className="text-sm mt-1 text-gray-600">
                      Price: ₹{product.price}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      -
                    </button>
                    <span className="text-lg font-semibold">{quantity}</span>
                    <button
                      onClick={() => addToCart(product.id)}
                      className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                      +
                    </button>
                  </div>
                  <p className="mt-2 text-sm text-gray-700">
                    Total: ₹{product.price * quantity}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Grand Total */}
          <div className="text-right mt-6 border-t pt-4 space-y-1">
            <div className="text-lg text-gray-700">
              Delivery Fee:{" "}
              <span className="font-semibold text-black">₹{DELIVERY_FEE}</span>
            </div>
            <h2 className="text-2xl font-bold text-indigo-700">
              Grand Total: ₹{getTotalAmount() + DELIVERY_FEE}
            </h2>
          </div>
          <button
          onClick={()=>navigate('/order')}
            className="px-6 py-2 ml-180  rounded-md bg-yellow-400 text-black font-semibold text-sm sm:text-base 
             shadow-md hover:bg-yellow-500 active:scale-95 transition-transform duration-200"
          >
            Buy Now
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
