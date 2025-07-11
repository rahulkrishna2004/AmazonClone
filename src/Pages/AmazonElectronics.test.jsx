import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import AmazonElectronics from "./AmazonElectronics";
import { ThemeContext } from "../Context/ThemeContext"; // Adjust path as needed

const renderWithTheme = (theme = "light") => {
  return render(
    <ThemeContext.Provider value={{ theme }}>
      <AmazonElectronics />
    </ThemeContext.Provider>
  );
};

describe("AmazonElectronics Component", () => {


  test("renders all 5 products", () => {
    renderWithTheme();
    const productTitles = screen.getAllByRole("heading", { level: 3 }); // h3 tags
    expect(productTitles).toHaveLength(5);
  });

  test("displays each product's price", () => {
    renderWithTheme();
  
  });

  test("renders with dark theme styling", () => {
    renderWithTheme("dark");
    const container = screen.getByText(/Electronics Deals/i).closest("div");
    expect(container.className).toMatch(/bg-gray-900/);
    expect(container.className).toMatch(/text-white/);
  });

  test("renders with light theme styling", () => {
    renderWithTheme("light");
    const container = screen.getByText(/Electronics Deals/i).closest("div");
    expect(container.className).toMatch(/bg-gray-100/);
    expect(container.className).toMatch(/text-gray-800/);
  });
});
