import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import BigBillionDays from "./BigBillionDays";
import { ThemeContext } from "../Context/ThemeContext"; 

const renderWithTheme = (theme = "light") => {
  return render(
    <ThemeContext.Provider value={{ theme }}>
      <BigBillionDays />
    </ThemeContext.Provider>
  );
};

describe("BigBillionDays Component", () => {
  test("renders correct image src", () => {
    renderWithTheme();
    const img = screen.getByAltText(/Big Billion Days/i);
    expect(img.src).toBe(
      "https://i.gadgets360cdn.com/large/amazon-main-banner-1200x675_1696706496874.jpg"
    );
  });

  test("applies light theme background", () => {
    renderWithTheme("light");
    const container = screen.getByAltText(/Big Billion Days/i).parentElement;
    expect(container.className).toMatch(/bg-\[#f3f3f3\]/);
  });

  test("applies dark theme background", () => {
    renderWithTheme("dark");
    const container = screen.getByAltText(/Big Billion Days/i).parentElement;
    expect(container.className).toMatch(/bg-\[#0d0d0d\]/);
  });

  test("applies light theme image border and shadow", () => {
    renderWithTheme("light");
    const img = screen.getByAltText(/Big Billion Days/i);
    expect(img.className).toMatch(/border-gray-300/);
    expect(img.className).toMatch(/shadow-gray-400\/20/);
  });

  test("applies dark theme image border and shadow", () => {
    renderWithTheme("dark");
    const img = screen.getByAltText(/Big Billion Days/i);
    expect(img.className).toMatch(/border-gray-700/);
    expect(img.className).toMatch(/shadow-yellow-600\/10/);
  });
});
