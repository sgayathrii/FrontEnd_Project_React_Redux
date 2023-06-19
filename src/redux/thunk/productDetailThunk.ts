import { productDetailsActions } from "../slices/productDetailSlice";
import axios from "axios";
import { AppDispatch } from "../../types/types";

export const fetchProductDetails = (productId: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const productDetailsUrl = `https://dummyjson.com/products/${productId}`;
      const response = await axios.get(productDetailsUrl);
      const productDetails = response.data;
      dispatch(productDetailsActions.getProductDetails(productDetails));
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };
};
