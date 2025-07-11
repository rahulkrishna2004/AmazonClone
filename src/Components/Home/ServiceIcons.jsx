import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext"; // Adjust the path as needed

const services = [
  {
    name: "Amazon\nPay",
    image: "/pay.jpg",
    link: "https://www.amazon.in/amazonpay",
  },
  {
    name: "Prime\nVideo",
    image: "/prime.jpg",
    link: "https://www.primevideo.com/",
  },
  {
    name: "Fresh\nGroceries",
    image: "/grocery.jpg",
    link: "https://www.amazon.in/alm/storefront?almBrandId=ctnow",
  },
  {
    name: "Bazaar\nDeals",
    image: "/bazaar.jpg",
    link: "https://www.amazon.in/gp/goldbox",
  },
  {
    name: "MX\nPlayer",
    image: "/MXplayer.jpg",
    link: "https://www.mxplayer.in/",
  },
  {
    name: "Medicines",
    image: "/pharmacy.jpg",
    link: "https://www.amazon.in/primepharmacy",
  },
  {
    name: "Book\nTickets",
    image: "/movie.jpg",
    link: "https://in.bookmyshow.com/",
  },
  {
    name: "Gift\nCards",
    image: "/gift.jpg",
    link: "https://www.amazon.in/gift-card-store",
  },
  {
    name: "Travel & \nTickets",
    image: "/travel.jpg",
    link: "https://www.amazon.in/b?node=28291857031",
  },
  {
    name: "eBooks",
    image: "/ebook.jpg",
    link: "https://www.amazon.in/Kindle-eBooks/b?ie=UTF8&node=1634753031",
  },
  {
    name: "Online\nShopping",
    image: "/movie.jpg",
    link: "https://www.amazon.in/",
  },
  {
    name: "aws",
    image: "/aws.jpg",
    link: "https://aws.amazon.com/",
  },
];

const ServiceIcons = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${
        theme === "dark" ? "bg-[#0d0d0d]" : "bg-white"
      } py-6 sm:py-10 transition-colors duration-300`}
    >
      <div className="px-4 sm:px-8 mb-4">
        <h1
          className={`text-lg sm:text-2xl font-bold ${
            theme === "dark" ? "text-yellow-400" : "text-gray-900"
          }`}
        >
          Discover trusted brands, delivered fast by Amazon
        </h1>
      </div>
      <div
        className={`flex overflow-x-auto gap-4 sm:gap-6 px-3 sm:px-5 pb-3 scrollbar-thin snap-x ${
          theme === "dark"
            ? "scrollbar-thumb-yellow-500 scrollbar-track-gray-700"
            : "scrollbar-thumb-yellow-400 scrollbar-track-gray-200"
        }`}
      >
        {services.map((service, index) => (
          <a
            href={service.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-shrink-0 w-24 mt-2 h-28 sm:w-28 sm:h-32 rounded-2xl p-2 sm:p-3 group snap-start transition-all duration-300 hover:scale-105 hover:shadow-lg
              ${
                theme === "dark"
                  ? "bg-[#1a1a1a] border border-gray-700 hover:border-yellow-500"
                  : "bg-white border border-gray-200 hover:border-yellow-400"
              }`}
          >
            <div className="flex flex-col items-center justify-center text-center w-full h-full">
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 mb-2 rounded-full flex items-center justify-center transition-all duration-300
                  ${
                    theme === "dark"
                      ? "border border-gray-600 bg-gray-800 group-hover:bg-yellow-900 group-hover:border-yellow-500"
                      : "border border-gray-300 bg-gray-100 group-hover:bg-yellow-100 group-hover:border-yellow-400"
                  }`}
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full"
                />
              </div>
              <span
                className={`text-[11px] sm:text-sm font-medium whitespace-pre-line leading-snug transition-colors duration-300 ${
                  theme === "dark" ? "text-yellow-100" : "text-gray-800"
                }`}
              >
                {service.name}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ServiceIcons;
