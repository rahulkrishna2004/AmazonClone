import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../Context/StoreContext";
import { ThemeContext } from "../Context/ThemeContext";

const BuyNow = () => {
  const navigate = useNavigate();
  const { cartItem } = useContext(StoreContext);
  const { theme } = useContext(ThemeContext);

  const DELIVERY_FEE = 59;

  const getTotalAmount = () => {
    let total = 0;
    Object.values(cartItem).forEach((item) => {
      const product = item.product;
      const quantity = item.quantity;
      if (product && quantity) {
        total += product.price * quantity;
      }
    });
    return total;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Order Data:", data);
    alert("Order placed successfully!");
    navigate("/order");
  };

  const inputStyle = `border border-gray-300 rounded-md p-2 w-full ${
    theme === "dark" ? "bg-gray-700 text-white" : "bg-white text-black"
  }`;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`max-w-3xl mx-auto p-6 rounded-xl shadow space-y-6 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="text-2xl font-bold">Delivery Information</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            placeholder="First name"
            {...register("firstName", { required: "First name is required" })}
            className={inputStyle}
          />
          {errors.firstName && (
            <p className="text-sm text-red-600 mt-1">
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div>
          <input
            type="text"
            placeholder="Last name"
            {...register("lastName", { required: "Last name is required" })}
            className={inputStyle}
          />
          {errors.lastName && (
            <p className="text-sm text-red-600 mt-1">
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <input
          type="email"
          placeholder="Email address"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email format",
            },
          })}
          className={inputStyle}
        />
        {errors.email && (
          <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <input
          type="text"
          placeholder="Street"
          {...register("street", { required: "Street is required" })}
          className={inputStyle}
        />
        {errors.street && (
          <p className="text-sm text-red-600 mt-1">{errors.street.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            placeholder="City"
            {...register("city", { required: "City is required" })}
            className={inputStyle}
          />
          {errors.city && (
            <p className="text-sm text-red-600 mt-1">{errors.city.message}</p>
          )}
        </div>
        <div>
          <input
            type="text"
            placeholder="State"
            {...register("state", { required: "State is required" })}
            className={inputStyle}
          />
          {errors.state && (
            <p className="text-sm text-red-600 mt-1">{errors.state.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            placeholder="Pin code"
            {...register("zip", {
              required: "Zip code is required",
              pattern: {
                value: /^[0-9]{5,6}$/,
                message: "Invalid zip code",
              },
            })}
            className={inputStyle}
          />
          {errors.zip && (
            <p className="text-sm text-red-600 mt-1">{errors.zip.message}</p>
          )}
        </div>
        <div>
          <input
            type="text"
            placeholder="Country"
            {...register("country", { required: "Country is required" })}
            className={inputStyle}
          />
          {errors.country && (
            <p className="text-sm text-red-600 mt-1">
              {errors.country.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <input
          type="text"
          placeholder="Phone"
          {...register("phone", {
            required: "Phone number is required",
            pattern: {
              value: /^[6-9]\d{9}$/,
              message: "Invalid Indian phone number",
            },
          })}
          className={inputStyle}
        />
        {errors.phone && (
          <p className="text-sm text-red-600 mt-1">{errors.phone.message}</p>
        )}
      </div>

      <div className="text-right mt-6 border-t pt-4 space-y-1">
        <div className="text-lg">
          Delivery Fee:{" "}
          <span className="font-semibold text-yellow-600">₹{DELIVERY_FEE}</span>
        </div>
        <h2 className="text-2xl font-bold text-indigo-500">
          Grand Total: ₹{getTotalAmount() + DELIVERY_FEE}
        </h2>
      </div>

      <button
        type="submit"
        className="w-full mt-4 px-6 py-2 rounded-md bg-yellow-400 text-black font-semibold text-sm sm:text-base 
          shadow-md hover:bg-yellow-500 active:scale-95 transition-transform duration-200"
      >
        Buy Now
      </button>
    </form>
  );
};

export default BuyNow;
