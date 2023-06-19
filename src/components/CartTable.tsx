import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { AppDispatch, CartTableProps } from "../types/types";
import { productActions } from "../redux/slices/productListSlice";
import { useDispatch } from "react-redux";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#c1c1c1",
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CartTable({
  cartItems,
  handleRemoveFromCart,
  calculateItemPrice,
}: CartTableProps) {
  const dispatch = useDispatch<AppDispatch>();

  const handleIncreaseQuantity = (itemId: number) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    dispatch(productActions.updateCartItems(updatedCartItems));
  };

  const handleDecreaseQuantity = (itemId: number) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    dispatch(productActions.updateCartItems(updatedCartItems));
  };

  if (cartItems.length === 0) {
    return (
      <Typography variant="h6" align="center" sx={{ mt: 4 }}>
        The cart is empty
      </Typography>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Product</StyledTableCell>
            <StyledTableCell align="right">Quantity</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems.map((item) => (
            <StyledTableRow key={item.id}>
              <StyledTableCell component="th" scope="row">
                {item.title}
              </StyledTableCell>
              <StyledTableCell align="right">
                <IconButton
                  onClick={() => handleDecreaseQuantity(item.id)}
                  style={{ marginRight: "4px", padding: "6px" }}
                >
                  <RemoveIcon />
                </IconButton>
                <span style={{ marginRight: "4px" }}>{item.quantity}</span>
                <IconButton
                  onClick={() => handleIncreaseQuantity(item.id)}
                  style={{ marginRight: "4px", padding: "6px" }}
                >
                  <AddIcon />
                </IconButton>
              </StyledTableCell>
              <StyledTableCell align="right">
                {calculateItemPrice(item)}
              </StyledTableCell>
              <StyledTableCell>
                <IconButton onClick={() => handleRemoveFromCart(item.id)}>
                  Remove
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
