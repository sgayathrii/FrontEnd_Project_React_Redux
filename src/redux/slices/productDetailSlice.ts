import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductDetailsState, ProductDetailsResponse } from "../../types/types";

const initialState: ProductDetailsState = {
  productDetails: null,
  isLoading: true,
};

const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {
    getProductDetails: (
      state,
      action: PayloadAction<ProductDetailsResponse>
    ) => {
      state.productDetails = action.payload;
      state.isLoading = false;
    },
  },
});

export const productDetailsActions = productDetailsSlice.actions;
const productDetailsReducer = productDetailsSlice.reducer;
export default productDetailsReducer;
