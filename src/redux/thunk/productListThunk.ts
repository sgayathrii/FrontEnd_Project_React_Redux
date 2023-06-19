import { productActions } from "../slices/productListSlice";
import { AppDispatch, Category, ProductsResponse } from "../../types/types";
import axios from "axios";

const productUrl = "https://dummyjson.com/products?limit=0";

// Thunk to fetch all products
export function fetchProductData() {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get(productUrl);
      const productData = response.data.products;
      const categories: Category[] = Array.from(
        new Set(productData.map((product: any) => product.category))
      );
      console.log(categories, "thunk");
      dispatch(productActions.getProductData(productData));
      dispatch(productActions.setCategories(categories));
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };
}

// Thunk  to fetch searched products
export function searchProduct(searchTerm: string) {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get(productUrl);
      const productData = response.data.products;
      const searchResult = productData.filter((product: ProductsResponse) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      dispatch(productActions.searchProduct(searchResult));
    } catch (error) {
      console.error("Error fetching product data:", error);
      throw error;
    }
  };
}
