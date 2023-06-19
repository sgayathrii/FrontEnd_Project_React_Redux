import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Slide,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { DialogBoxProps } from "../types/types";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogBox({
  product,
  handleRemove,
  handleCancel,
}: DialogBoxProps) {
  return (
    <Dialog
      open={true}
      onClose={handleCancel}
      TransitionComponent={Transition}
      keepMounted
    >
      <DialogTitle>Confirmation</DialogTitle>
      <DialogContent>
        <Typography variant="body1">
          Are you sure you want to remove {product.title} from favorites?
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={handleRemove} color="error">
          Remove
        </Button>
      </DialogActions>
    </Dialog>
  );
}
