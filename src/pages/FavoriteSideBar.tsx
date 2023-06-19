import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ThumbDownTwoToneIcon from "@mui/icons-material/ThumbDownTwoTone";

import { productActions } from "../redux/slices/productListSlice";
import { RootState, AppDispatch, ProductWithQuantity } from "../types/types";
import { AddShoppingCart } from "@mui/icons-material";

export default function FavoritePage() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [isBackClicked, setIsBackClicked] = useState(false);

  const handleBack = () => {
    navigate(-1);
  };

  const favoriteList = useSelector(
    (state: RootState) => state.products.favoriteList
  ) as ProductWithQuantity[];

  const handleCartClick = (product: ProductWithQuantity) => {
    dispatch(productActions.addToCart(product));
  };

  const handleRemoveFromFavorites = (productId: number) => {
    dispatch(productActions.removeFromFavorites(productId));
  };

  const handleCloseSidebar = () => {
    if (isBackClicked) {
      setIsBackClicked(false);
    }
  };

  return (
    <Drawer anchor="right" open={true} onClose={handleCloseSidebar}>
      <Button onClick={handleBack} startIcon={<ArrowBackIcon />}>
        Back
      </Button>
      <List>
        <ListItem>
          <ListItemText primary="Favorite Products" />
        </ListItem>
        {favoriteList.map((product) => (
          <ListItem key={product.id}>
            <ListItemText primary={product.title} />
            <IconButton onClick={() => handleCartClick(product)}>
              <AddShoppingCart color="info" />
            </IconButton>
            <IconButton onClick={() => handleRemoveFromFavorites(product.id)}>
              <ThumbDownTwoToneIcon color="info" />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
