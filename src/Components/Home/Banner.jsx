import React, { useRef, useState, useEffect } from "react";

const bannerData = [
  {
    id: 1,
    image: "/banner1.jpg",
    link: "https://www.yamaha-motor-india.com/mt-15.html",
  },
  { id: 6, image: "/banner6.png", link: "https://in.bookmyshow.com/" },
  { id: 2, image: "/banner2.jpg", link: "https://www.oneplus.in/10r" },
  { id: 3, image: "/banner3.jpg", link: "https://www.audi.in/" },
  { id: 5, image: "/banner5.jpg", link: "https://www.rapido.bike/" },
  { id: 7, image: "/banner7.jpg", link: "https://www.zomato.com/" },
  { id: 4, image: "/banner4.jpg", link: "https://www.zepto.in/" },
];

export default function Banner() {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index) => {
    const slider = sliderRef.current;
    if (slider) {
      const width = slider.offsetWidth;
      slider.scrollTo({ left: index * width, behavior: "smooth" });
      setActiveIndex(index);
    }
  };

  const handleScroll = () => {
    const slider = sliderRef.current;
    if (slider) {
      const width = slider.offsetWidth;
      const index = Math.round(slider.scrollLeft / width);
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % bannerData.length;
      scrollToIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <div className="text-lg sm:text-2xl font-extrabold text-center text-gray-800 dark:text-zinc-400 px-4 py-2 mx-auto sm:max-w-5xl">
        Trusted Partners, Endless Choices,{" "}
        <u>
          <span className="text-yellow-400">delivered by Amazon</span>
        </u>
      </div>

      <div className="relative overflow-hidden">
        <div
          ref={sliderRef}
          className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory w-full h-[200px] sm:h-[500px] py-2 hide-scrollbar"
        >
          {bannerData.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-full h-full snap-center relative"
            >
              <img
                src={item.image}
                alt=""
                className="w-full h-full object-contain transition duration-800"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-20" />
              <span className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 sm:px-8 sm:py-4 px-4 py-2 rounded-full bg-yellow-400 text-black font-semibold text-sm shadow-lg">
                Explore Now
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="flex justify-center sm:gap-2.5 gap-1.5 ">
        {bannerData.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              activeIndex === index
                ? "bg-yellow-400 scale-125"
                : "bg-gray-300 dark:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
