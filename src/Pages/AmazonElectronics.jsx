import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext"; // adjust path if needed

const electronics = [
  {
    id: "e1",
    name: "Sony WH-1000XM5 Headphones",
    image:
      "https://imgs.search.brave.com/5KNh19i7V-BQZTYXqxg6QhYAC2C2UN3SM7KzA6sa9Bo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzcyLzRk/L2QzLzcyNGRkMzEw/YmQ0MzBkNzdhNGJj/YThmZWQwOTJlOTAz/LmpwZw",
    price: 29999,
    description: "Industry-leading noise cancellation, 30 hrs battery.",
  },
  {
    id: "e2",
    name: 'Samsung 55" 4K Smart TV',
    image:
      "https://imgs.search.brave.com/F8xZ2tpqq4CeR2P4IZJ24MRPwjrVKOT09391_Z5A5CE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFrSTM0K2pCQUwu/anBn",
    price: 55999,
    description: "Crystal UHD display, voice control, and built-in apps.",
  },
  {
    id: "e3",
    name: "Canon EOS 1500D DSLR",
    image: "https://m.media-amazon.com/images/I/914hFeTU2-L._SL1500_.jpg",
    price: 42999,
    description: "24.1MP camera with Wi-Fi and EF S18-55 lens.",
  },
  {
    id: "e4",
    name: "Apple iPad 10th Gen (Wi-Fi, 64GB)",
    image: "https://m.media-amazon.com/images/I/61uA2UVnYWL._SL1500_.jpg",
    price: 41999,
    description: "10.9-inch display with A14 Bionic chip.",
  },
  {
    id: "e5",
    name: "Echo Dot (5th Gen)",
    image:
      "https://imgs.search.brave.com/nIIq4lXCv9kLcuhypMzaf_FAijPe56roUkKX0Da3hgw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmVi/YXlpbWcuY29tL2lt/YWdlcy9nL05lb0FB/T1N3ZDFoalNKLTcv/cy1sMjI1LmpwZw",
    price: 4999,
    description: "Smart speaker with Alexa and improved bass.",
  },
];

const AmazonElectronics = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`px-4 sm:px-8 py-12 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <h2 className="text-3xl font-bold text-center mb-10">
        Electronics Deals & Gadgets
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {electronics.map((item) => (
          <div
            key={item.id}
            className={`p-5 rounded-xl shadow hover:shadow-lg transition ${
              theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"
            }`}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold">
              {item.name}
            </h3>
            <p className="text-sm mb-2">
              {item.description}
            </p>
            <p
              className={`text-xl font-bold mb-3 ${
                theme === "dark" ? "text-green-400" : "text-green-600"
              }`}
            >
              ₹{item.price.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AmazonElectronics;
