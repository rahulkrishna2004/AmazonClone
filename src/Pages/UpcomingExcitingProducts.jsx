import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

function UpcomingExcitingProducts() {
  const { theme } = useContext(ThemeContext);

  const upcoming = [
    {
      id: "u1",
      name: "Tesla Optimus Robot",
      image:
        "https://imgs.search.brave.com/T1pYpQFWcu082o5uPExsmOLHH7BPhUc3xOqbYQLGLiU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbnRl/cmVzdGluZ2VuZ2lu/ZWVyaW5nLmNvbS9f/bmV4dC9pbWFnZT91/cmw9aHR0cHM6Ly9j/bXMuaW50ZXJlc3Rp/bmdlbmdpbmVlcmlu/Zy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjQvMTEvSUUt/UGhvdG8tMzctMi5q/cGcmdz0zODQwJnE9/NzU",
      expected: "2025",
      description: "A humanoid robot by Tesla designed to assist with everyday tasks using AI.",
    },
    {
      id: "u2",
      name: "Amazon Astro AI Robot",
      image:
        "https://imgs.search.brave.com/dJ8uuGdcsxzSNJrzyOvYtSPxuZLOx6jxzqpfNZSBzOA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbGF0/Zm9ybS50aGV2ZXJn/ZS5jb20vd3AtY29u/dGVudC91cGxvYWRz/L3NpdGVzLzIvY2hv/cnVzL3VwbG9hZHMv/Y2hvcnVzX2Fzc2V0/L2ZpbGUvMjI4ODI5/NTUvYW1hem9uX2Fz/dHJvX2hvbWVfcm9i/b3RfNDc3M185Lmpw/Zz9xdWFsaXR5PTkw/JnN0cmlwPWFsbCZj/cm9wPTAsMCwxMDAs/MTAwJnc9MjQwMA",
      expected: "Late 2024",
      description: "Smart home robot with Alexa integration, home monitoring, and face recognition.",
    },
    {
      id: "u3",
      name: "DJI Avata 2 FPV Drone",
      image:
        "https://imgs.search.brave.com/o7uQ4ycY1SO1hwlwsoXNbhOAgpdJQ046NwbTx8eGtv8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L3JV/eVE0ZkpaZTlGR21G/TFNYUkVNUWMtODQw/LTgwLnBuZw",
      expected: "Coming Soon",
      description: "Immersive flight experience drone with 4K ultra-wide camera and motion controller.",
    },
    {
      id: "u5",
      name: "Neuralink Brain Chip",
      image:
        "https://imgs.search.brave.com/aqis9KniPeNuNRaXatrBfUPqZkhhhEWdXnEQ1I1ifqo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zY3gx/LmItY2RuLm5ldC9j/c3ovbmV3cy84MDBh/LzIwMjQvbmV1cmFs/aW5rLmpwZw",
      expected: "In Trials",
      description: "A brain-computer interface to connect humans and AI directly.",
    },
  ];

 

  return (
    <section
      className={`py-12 px-4 sm:px-8 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"
      }`}
    >
      <h2 className="text-3xl font-bold text-center mb-10">
        Upcoming & Exciting Tech Products
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {upcoming.map((product) => (
          <div
            key={product.id}
            className={`p-5 rounded-xl shadow hover:shadow-lg transition ${
              theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"
            }`}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-contain mb-4 rounded"
            />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-sm mb-2">{product.description}</p>
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full mt-2">
              Expected: {product.expected}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UpcomingExcitingProducts;
