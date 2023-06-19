import React, { useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, ProductWithQuantity, RootState } from "../types/types";
import { fetchProductDetails } from "../redux/thunk/productDetailThunk";
import LoadingSpinner from "../components/LoadingSpinner";
import {
  Button,
  Card,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { productActions } from "../redux/slices/productListSlice";

export default function ProductDetail() {
  const { productId } = useParams<{ productId: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const productDetails = useSelector(
    (state: RootState) => state.productDetail.productDetails
  );
  const isLoading = useSelector(
    (state: RootState) => state.productDetail.isLoading
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

  useEffect(() => {
    dispatch(fetchProductDetails(productId || ""));
  }, [dispatch, productId]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!productDetails) {
    return <p>No product details available.</p>;
  }

  const handleCartClick = (product: ProductWithQuantity) => {
    const productWithQuantity: ProductWithQuantity = {
      ...product,
      quantity: 1,
    };
    dispatch(productActions.addToCart(productWithQuantity));
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card sx={{ maxWidth: 345, display: "flex" }}>
        <style>{customButtonStyles}</style>
        <Carousel showArrows={true} showStatus={false} showThumbs={false}>
          {productDetails.images.map((image, index) => (
            <div key={index}>
              <CardMedia
                component="img"
                height="140"
                image={image}
                alt={`Product Image ${index}`}
              />
            </div>
          ))}
        </Carousel>
      </Card>
      <div style={{ marginLeft: "20px", marginBottom: "20px" }}>
        <Typography variant="h5" component="h2">
          {productDetails.title}
        </Typography>
        <Typography color="textSecondary">
          Price: {productDetails.price}
        </Typography>
        <Typography variant="body2" component="p">
          {productDetails.description}
        </Typography>
        <br />
        <Button
          variant="contained"
          onClick={() => handleCartClick(productDetails)}
          sx={{
            backgroundColor: "grey",
            border: "1px solid lightgrey",
            padding: "5px 10px",
            fontSize: "10px",
            "&:hover": {
              backgroundColor: "#FFAFCC",
            },
          }}
        >
          Add to Cart
        </Button>
        <Button
          variant="contained"
          onClick={handleGoBack}
          sx={{
            backgroundColor: "grey",
            border: "1px solid lightgrey",
            padding: "5px 10px",
            fontSize: "10px",
            "&:hover": {
              backgroundColor: "#FFAFCC",
            },
          }}
        >
          Back
        </Button>

        <Typography variant="body2" component="p" sx={{ padding: "15px" }}>
          Members receive free standard shipping and free returns on purchases
          of at least &#x20AC;25
        </Typography>
      </div>
    </Container>
  );
}
