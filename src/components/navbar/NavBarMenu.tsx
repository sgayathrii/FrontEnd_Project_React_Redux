import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge, List, ListItem, Drawer } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../types/types";
import FavoriteSideBar from "../../pages/FavoriteSideBar";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

export default function NavBarMenu() {
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  const toggleWishlist = () => {
    setIsWishlistOpen((prevState) => !prevState);
  };

  const favoriteList = useSelector(
    (state: RootState) => state.products.favoriteList
  );

  const shoppingList = useSelector(
    (state: RootState) => state.products.cartList
  );

  const wishlistCount = favoriteList.length;

  let cartItemCount = 0;
  shoppingList.forEach((item) => {
    cartItemCount += item.quantity;
  });

  return (
    <List component="nav" className="navbar-menu">
      <ListItem component={Link} to="/" className="navbar-menu-item">
        <CottageOutlinedIcon />
      </ListItem>
      <ListItem component={Link} to="/products" className="navbar-menu-item">
        <ShoppingBagOutlinedIcon />
      </ListItem>
      <ListItem component={Link} to="/cart" className="navbar-menu-item">
        <Badge color="info" badgeContent={cartItemCount} showZero>
          <ShoppingCartOutlinedIcon />
        </Badge>
      </ListItem>
      <ListItem
        component={Link}
        to=""
        sx={{ whiteSpace: "nowrap", color: "#f72585" }}
        onClick={toggleWishlist}
      >
        <Badge color="success" badgeContent={wishlistCount} showZero>
          <FavoriteBorderOutlinedIcon />
        </Badge>
        <Drawer anchor="right" open={isWishlistOpen} onClose={toggleWishlist}>
          <FavoriteSideBar />
        </Drawer>
      </ListItem>
    </List>
  );
}
