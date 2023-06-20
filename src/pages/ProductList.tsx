import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";

import {
  RootState,
  AppDispatch,
  ProductsResponse,
  Category,
} from "../types/types";
import {
  fetchProductData,
  searchProduct,
} from "../redux/thunk/productListThunk";
import ProductCard from "./ProductCard";
import LoadingSpinner from "../components/LoadingSpinner";
import SearchForm from "../components/SearchForm";
import SubNavBar from "../components/SubNavBar";
import SortProducts from "../components/SortProducts";
import { SelectChangeEvent } from "@mui/material";

export default function ProductList() {
  const dispatch = useDispatch<AppDispatch>();

  const productList = useSelector(
    (state: RootState) => state.products.productList
  );
  const isLoading = useSelector((state: RootState) => state.products.isLoading);
  const searchResults = useSelector(
    (state: RootState) => state.products.searchResults
  );
  const categories = useSelector(
    (state: RootState) => state.products.categories
  );

  const [filteredProducts, setFilteredProducts] =
    useState<ProductsResponse[]>(productList);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  const handleSearch = (searchTerm: string) => {
    dispatch(searchProduct(searchTerm));
  };

  const handleReset = () => {
    setFilteredProducts(productList);
  };

  useEffect(() => {
    if (searchResults.length > 0) {
      setFilteredProducts(searchResults);
    } else {
      if (selectedCategory) {
        const categoryProducts = productList.filter(
          (product) => product.category === selectedCategory
        );
        setFilteredProducts(categoryProducts);
      } else {
        setFilteredProducts(productList);
      }
    }
  }, [searchResults, productList, selectedCategory]);

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
  };

  const handleSortOptionChange = (event: SelectChangeEvent<string>) => {
    const selectedOption = event.target.value;
    setSortOption(selectedOption);

    if (selectedOption === "A-Z") {
      setFilteredProducts(
        [...filteredProducts].sort((a, b) => a.title.localeCompare(b.title))
      );
    } else if (selectedOption === "Price") {
      setFilteredProducts(
        [...filteredProducts].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts(productList);
    }
  };

  return (
    <div>
      <div style={{ marginTop: "72px" }}>
        <Grid
          container
          spacing={1}
          m={1}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <SearchForm onSearch={handleSearch} onReset={handleReset} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <SortProducts
              sortOption={sortOption}
              handleSortOptionChange={handleSortOptionChange}
            />
          </Grid>
        </Grid>
        <SubNavBar
          categories={categories}
          selectedCategory={selectedCategory}
          onSelect={handleCategorySelect}
        />
      </div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Grid container spacing={2} m={2}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Grid>
      )}
    </div>
  );
}
