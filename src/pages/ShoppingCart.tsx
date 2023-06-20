import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, ProductWithQuantity, RootState } from "../types/types";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { productActions } from "../redux/slices/productListSlice";
import CartTable from "../components/CartTable";

export default function ShoppingCart() {
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const cartItems = useSelector((state: RootState) => state.products.cartList);

  const handleRemoveFromCart = (productId: number) => {
    dispatch(productActions.removeFromCart(productId));
  };

  const calculateItemPrice = (item: ProductWithQuantity) => {
    return item.quantity * item.price;
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item: ProductWithQuantity) => {
      totalPrice += calculateItemPrice(item);
    });
    return totalPrice;
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          marginBottom: "16px",
        }}
      >
        <Button onClick={handleBack} startIcon={<ArrowBackIcon />}>
          Back
        </Button>
      </div>
      <TableContainer>
        <CartTable
          cartItems={cartItems}
          handleRemoveFromCart={handleRemoveFromCart}
          calculateItemPrice={calculateItemPrice}
        />
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Total:</TableCell>
              <TableCell></TableCell>
              <TableCell>{calculateTotalPrice()}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
