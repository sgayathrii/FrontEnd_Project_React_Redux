import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  ProductsResponse,
  InitialState,
  ProductWithQuantity,
  Category,
} from "../../types/types";

const initialState: InitialState = {
  productList: [],
  favoriteList: [],
  cartList: [],
  isLoading: true,
  searchResults: [],
  categories: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProductData: (state, action: PayloadAction<ProductsResponse[]>) => {
      state.productList = action.payload;
      state.isLoading = false;
    },
    addToFavorites: (state, action: PayloadAction<ProductsResponse>) => {
      const favoriteProducts = action.payload;
      state.favoriteList.push(favoriteProducts);
    },
    removeFromFavorites: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      state.favoriteList = state.favoriteList.filter(
        (product) => product.id !== productId
      );
    },
    addToCart: (state, action: PayloadAction<ProductWithQuantity>) => {
      const toCartproducts = action.payload;
      const existingProduct = state.cartList.find(
        (item) => item.id === toCartproducts.id
      );

      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.cartList.push({ ...toCartproducts, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const removeProductId = action.payload;
      state.cartList = state.cartList.filter(
        (product) => product.id !== removeProductId
      );
    },
    updateCartItems: (state, action: PayloadAction<ProductWithQuantity[]>) => {
      state.cartList = action.payload;
    },
    searchProduct: (state, action: PayloadAction<ProductsResponse[]>) => {
      state.searchResults = action.payload;
      state.isLoading = false;
    },
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },
  },
});

export const productActions = productSlice.actions;
const productReducer = productSlice.reducer;
export default productReducer;
