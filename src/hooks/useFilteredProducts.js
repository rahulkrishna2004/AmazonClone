import { useMemo } from "react";

export function useFilteredProducts(products, { search, category, minPrice, maxPrice }) {
  return useMemo(() => {
    return products.filter((product) => {
      const matchSearch = product.name.toLowerCase().includes(search.toLowerCase());
      const matchCategory = category === "All" || product.category === category;
      const matchMin = minPrice === "" || product.price >= parseInt(minPrice);
      const matchMax = maxPrice === "" || product.price <= parseInt(maxPrice);
      return matchSearch && matchCategory && matchMin && matchMax;
    });
  }, [products, search, category, minPrice, maxPrice]);
}
