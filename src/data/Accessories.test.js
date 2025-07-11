import { describe, expect, test } from "vitest";
import { mobileAccessories } from "./Accessories"; // ✅ Adjust path

describe("mobileAccessories Data", () => {
  test("contains at least one product", () => {
    expect(mobileAccessories.length).toBeGreaterThan(0);
  });

  test("each product has required fields", () => {
    mobileAccessories.forEach((item) => {
      expect(item).toHaveProperty("id");
      expect(item).toHaveProperty("name");
      expect(item).toHaveProperty("image");
      expect(item).toHaveProperty("price");
      expect(item).toHaveProperty("description");
      expect(item).toHaveProperty("category");

      expect(typeof item.id).toBe("string");
      expect(typeof item.name).toBe("string");
      expect(typeof item.image).toBe("string");
      expect(typeof item.price).toBe("number");
      expect(typeof item.description).toBe("string");
      expect(typeof item.category).toBe("string");
    });
  });

  test("all product IDs are unique", () => {
    const ids = mobileAccessories.map((item) => item.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  test("all categories are valid strings and expected", () => {
    const expectedCategories = [
      "Mobiles",
      "Electronics",
      "Shoes",
      "Cloths",
      "Beauty",
      "Appliances",
      "Toys",
      "Computers",
      "Watches",
    ];

    mobileAccessories.forEach((item) => {
      expect(expectedCategories).toContain(item.category);
    });
  });

  test("no field is empty or null", () => {
    mobileAccessories.forEach((item) => {
      expect(item.id).not.toBe("");
      expect(item.name).not.toBe("");
      expect(item.image).not.toBe("");
      expect(item.price).not.toBe(null);
      expect(item.description).not.toBe("");
      expect(item.category).not.toBe("");
    });
  });

  test("price is a positive number", () => {
    mobileAccessories.forEach((item) => {
      expect(item.price).toBeGreaterThan(0);
    });
  });
});
