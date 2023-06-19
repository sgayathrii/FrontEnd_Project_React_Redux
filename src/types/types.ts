import { SelectChangeEvent } from "@mui/material";
import store from "../redux/store";

export type ProductsResponse = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type InitialState = {
  productList: ProductsResponse[];
  favoriteList: ProductsResponse[];
  cartList: ProductWithQuantity[];
  isLoading: boolean;
  searchResults: ProductsResponse[] | [];
  categories: Category[];
};

export type Category = string;

export type SubNavBarProps = {
  categories: Category[];
  selectedCategory: Category | null;
  onSelect: (category: Category) => void;
};

export type SearchFormProps = {
  onSearch: (searchTerm: string) => void;
  onReset: () => void;
};

export type ProductDetailsResponse = ProductWithQuantity | null;

export type SortProductsProps = {
  sortOption: string;
  handleSortOptionChange: (event: SelectChangeEvent<string>) => void;
};

export type ProductDetailsState = {
  productDetails: ProductDetailsResponse;
  isLoading: boolean;
};

export type DialogBoxProps = {
  product: ProductsResponse;
  handleRemove: () => void;
  handleCancel: () => void;
};

export type ProductCardProps = {
  product: ProductsResponse;
};

export type ProductWithQuantity = ProductsResponse & { quantity: number };

export type CartTableProps = {
  cartItems: ProductWithQuantity[];
  handleRemoveFromCart: (productId: number) => void;
  calculateItemPrice: (item: ProductWithQuantity) => number;
};

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
