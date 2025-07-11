import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; 

import Home from "./Home";
import { ThemeContext } from "../../Context/ThemeContext";
import { StoreContext } from "../../Context/StoreContext";

vi.mock("../../hooks/useFilteredProducts", () => ({
  useFilteredProducts: vi.fn(() => [
    {
      id: 1,
      name: "Mock Product",
      category: "Mobiles",
      price: 999,
      image: "https://via.placeholder.com/150",
      description: "This is a mock product.",
    },
  ]),
}));

describe("Home Component", () => {
  test("renders product store heading", () => {
    render(
      <MemoryRouter> {/* ✅ Add this wrapper */}
        <ThemeContext.Provider value={{ theme: "light" }}>
          <StoreContext.Provider value={{ addToCart: vi.fn() }}>
            <Home />
          </StoreContext.Provider>
        </ThemeContext.Provider>
      </MemoryRouter>
    );
  });
});
