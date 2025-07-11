import React from "react";

const bannerData = [
  {
    id: 1,
    image: "/banner1.jpg",
    link: "https://www.yamaha-motor-india.com/mt-15.html",
  },
  {
    id: 2,
    image: "/banner2.jpg",
    link: "https://www.oneplus.in/10r",
  },
  {
    id: 3,
    image: "/banner3.jpg",
    link: "https://www.audi.in/",
  },
  {
    id: 4,
    image: "/banner4.jpg",
    link: "https://www.zepto.in/",
  },
  {
    id: 5,
    image: "/banner5.jpg",
    link: "https://www.rapido.bike/",
  },
  {
    id: 6,
    image: "/banner6.png",
    link: "https://in.bookmyshow.com/",
  },
  {
    id: 7,
    image: "/banner7.jpg",
    link: "https://www.zomato.com/",
  },
];

export default function Banner() {
  return (
    <div className="mt-5 overflow-hidden relative">
      <style>{`
        @keyframes scrollBanner {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-50%); }
  }

  .scroll-animation {
    animation: scrollBanner 40s linear infinite;
  }

  @media (max-width: 640px) {
    .scroll-animation {
      animation: scrollBanner 10s linear infinite;
    }
  }
`}</style>

      <div className="text-xl sm:text-3xl font-extrabold text-center text-gray-800 dark:text-zinc-400 px-4 py-3 mx-auto max-w-4xl ">
        Trusted partners, endless choices,{" "}
        <u>
          <span className="text-yellow-400">delivered by Amazon</span>
        </u>
      </div>

      <div className="flex gap-6 px-2 py-4 w-fit scroll-animation">
        {[...bannerData, ...bannerData].map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative min-w-[90vw] sm:min-w-[500px] h-[200px] sm:h-[250px] rounded-2xl overflow-hidden shadow-2xl border-2 border-transparent hover:border-yellow-400 transition-all duration-500 hover:scale-105 bg-black group"
          >
            <img
              src={item.image}
              alt=""
              className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-full bg-yellow-400 text-black font-semibold text-xs sm:text-sm shadow-lg opacity-90 group-hover:opacity-100 transition">
              Explore Now
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
