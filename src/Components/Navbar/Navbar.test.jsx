import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

vi.mock("../../Context/ThemeToggleButton", () => ({
  default: () => <button data-testid="theme-toggle">Toggle</button>,
}));

describe("Navbar Component", () => {
  const mockSetShowLogin = vi.fn();

  const renderNavbar = () =>
    render(
      <BrowserRouter>
        <Navbar setShowLogin={mockSetShowLogin} />
      </BrowserRouter>
    );
  test("cart button triggers navigation", () => {
    renderNavbar();
    const cart = screen.getByText(/cart/i);
    fireEvent.click(cart);
    expect(mockNavigate).toHaveBeenCalledWith("/cart");
  });

  test("sign in button triggers setShowLogin", () => {
    renderNavbar();
    const avatar = screen.getByText("👤");
    fireEvent.click(avatar);
    expect(mockSetShowLogin).toHaveBeenCalledWith(true);
  });

});
