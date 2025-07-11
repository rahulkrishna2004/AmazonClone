import { renderHook } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { useFilteredProducts } from "./useFilteredProducts";

const mockProducts = [
  { id: 1, name: "iPhone", price: 80000, category: "Mobiles" },
  { id: 2, name: "Samsung TV", price: 45000, category: "Electronics" },
  { id: 3, name: "Nike Shoes", price: 3000, category: "Shoes" },
  { id: 4, name: "iPad", price: 40000, category: "Mobiles" },
];

describe("useFilteredProducts Hook", () => {
  test("returns all products if no filters are applied", () => {
    const { result } = renderHook(() =>
      useFilteredProducts(mockProducts, {
        search: "",
        category: "All",
        minPrice: "",
        maxPrice: "",
      })
    );
    expect(result.current).toHaveLength(4);
  });

  test("filters by search string (case-insensitive)", () => {
    const { result } = renderHook(() =>
      useFilteredProducts(mockProducts, {
        search: "ip",
        category: "All",
        minPrice: "",
        maxPrice: "",
      })
    );
    expect(result.current.map(p => p.name)).toEqual(["iPhone", "iPad"]);
  });

  test("filters by category", () => {
    const { result } = renderHook(() =>
      useFilteredProducts(mockProducts, {
        search: "",
        category: "Mobiles",
        minPrice: "",
        maxPrice: "",
      })
    );
    expect(result.current.map(p => p.name)).toEqual(["iPhone", "iPad"]);
  });

  test("filters by min price", () => {
    const { result } = renderHook(() =>
      useFilteredProducts(mockProducts, {
        search: "",
        category: "All",
        minPrice: "40000",
        maxPrice: "",
      })
    );
    expect(result.current.map(p => p.name)).toEqual(["iPhone", "Samsung TV", "iPad"]);
  });

  test("filters by max price", () => {
    const { result } = renderHook(() =>
      useFilteredProducts(mockProducts, {
        search: "",
        category: "All",
        minPrice: "",
        maxPrice: "10000",
      })
    );
    expect(result.current.map(p => p.name)).toEqual(["Nike Shoes"]);
  });

  test("filters by multiple conditions", () => {
    const { result } = renderHook(() =>
      useFilteredProducts(mockProducts, {
        search: "ipad",
        category: "Mobiles",
        minPrice: "30000",
        maxPrice: "50000",
      })
    );
    expect(result.current.map(p => p.name)).toEqual(["iPad"]);
  });

  test("returns empty array if no matches found", () => {
    const { result } = renderHook(() =>
      useFilteredProducts(mockProducts, {
        search: "nonexistent",
        category: "All",
        minPrice: "",
        maxPrice: "",
      })
    );
    expect(result.current).toEqual([]);
  });
});
