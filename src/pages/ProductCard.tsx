import React from "react";
import { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {
  ProductCardProps,
  ProductWithQuantity,
  ProductsResponse,
} from "../types/types";
import { AddShoppingCart, Favorite, FavoriteBorder } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../types/types";
import { productActions } from "../redux/slices/productListSlice";
import DialogBox from "../components/DialogBox";

export default function ProductCard({ product }: ProductCardProps) {
  const dispatch = useDispatch<AppDispatch>();

  const imageWidth = `${160 / product.images.length}%`;

  const [isHovered, setIsHovered] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const favoriteList = useSelector(
    (state: RootState) => state.products.favoriteList
  );

  const customButtonStyles = `
  .carousel .control-dots .dot {
    background-color: black; /* Change the color here */
  }
  .carousel .control-dots .dot:hover {
      transform: scale(1.2); /* Add hover effect */
      transition: transform 0.3s ease; /* Add transition for smooth animation */
      background-color: yellow;
    }
`;

  // Favorites
  const handleFavoriteClick = () => {
    if (isProductFavorite) {
      setShowDialog(true);
    } else {
      dispatch(productActions.addToFavorites(product));
    }
  };

  const handleRemoveFavorite = () => {
    dispatch(productActions.removeFromFavorites(product.id));
    setShowDialog(false);
  };

  const handleCancel = () => {
    setShowDialog(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const isProductFavorite = favoriteList.some(
    (favorite: ProductsResponse) => favorite.id === product.id
  );

  // Cart
  const handleCartClick = () => {
    const productWithQuantity: ProductWithQuantity = {
      ...product,
      quantity: 1,
    };
    dispatch(productActions.addToCart(productWithQuantity));
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "300px",
          border: "1px solid lightpink",
        }}
      >
        <CardContent>
          <Link to={`/product/${product.id}`} key={product.id}>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontSize: "16px", fontFamily: "Josefin Sans" }}
            >
              {product.title}
            </Typography>
          </Link>
          <Typography
            variant="subtitle1"
            sx={{ marginTop: "8px", fontSize: "13px" }}
          >
            Price: ${product.price}
          </Typography>
        </CardContent>
        <style>{customButtonStyles}</style>
        <Carousel showArrows={true} showStatus={false} showThumbs={false}>
          {product.images.map((image: string, index: number) => (
            <div key={index}>
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <CardMedia
                  component="img"
                  src={image}
                  alt={product.title}
                  style={{
                    height: 200,
                    objectFit: "contain",
                    width: imageWidth,
                    margin: "auto",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
                {isHovered && (
                  <div
                    style={{
                      position: "absolute",
                      top: "80%",
                      left: "80%",
                      transform: "translate(-50%, -50%)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <IconButton
                      onClick={handleFavoriteClick}
                      color={isProductFavorite ? "secondary" : "default"}
                    >
                      {isProductFavorite ? (
                        <Favorite />
                      ) : (
                        <FavoriteBorder color="error" />
                      )}
                    </IconButton>
                    {isProductFavorite && (
                      <IconButton onClick={handleCartClick}>
                        <AddShoppingCart color="info" />
                      </IconButton>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </Carousel>
      </Card>
      {showDialog && (
        <DialogBox
          product={product}
          handleRemove={handleRemoveFavorite}
          handleCancel={handleCancel}
        />
      )}
    </Grid>
  );
}
