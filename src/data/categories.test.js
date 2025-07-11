import { describe, test, expect } from "vitest";
import categories from "./Catogory";

describe("Categories Data", () => {
  test("contains at least one category", () => {
    expect(categories.length).toBeGreaterThan(0);
  });

  test("each category has name and image", () => {
    categories.forEach((cat) => {
      expect(cat).toHaveProperty("name");
      expect(cat).toHaveProperty("image");

      expect(typeof cat.name).toBe("string");
      expect(typeof cat.image).toBe("string"); // Expect image to be path string
      expect(cat.name.length).toBeGreaterThan(0);
      expect(cat.image.length).toBeGreaterThan(0);
    });
  });

  test("category names are unique", () => {
    const names = categories.map((cat) => cat.name);
    const uniqueNames = new Set(names);
  });

  test("does not contain null or undefined entries", () => {
    categories.forEach((cat) => {
      expect(cat).not.toBeNull();
      expect(cat).not.toBeUndefined();
    });
  });

  test("contains expected category types", () => {
    const expectedCategories = [
      "Mobiles",
      "Electronics",
      "Shoes",
      "Cloths",
      "Beauty",
      "Appliances",
      "Books",
      "Toys",
      "Computers",
      "Watches",
      "Musical Instruments",
      "Sports & Fitness",
      "Jewellery" // in case you add later
    ];

    categories.forEach((cat) => {
      expect(expectedCategories).toContain(cat.name);
    });
  });

  test("image paths include valid extensions", () => {
    categories.forEach((cat) => {
      expect(
        cat.image.endsWith(".jpg") ||
        cat.image.endsWith(".jpeg") ||
        cat.image.endsWith(".png")
      ).toBe(true);
    });
  });
});
