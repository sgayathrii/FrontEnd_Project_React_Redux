import {configureStore} from "@reduxjs/toolkit";
import productReducer from "./slices/productListSlice";
import productDetailsReducer from "./slices/productDetailSlice";

const store = configureStore({
    reducer: {
        products: productReducer,
        productDetail: productDetailsReducer,
    },
});

export default store;