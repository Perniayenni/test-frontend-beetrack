import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@material-ui/core";

export const ButtonCreateUser = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button className="button_create_user_button" onClick={handleClickOpen}>
        <FontAwesomeIcon
          className="button_create_user_icon"
          icon={faPlusCircle}
        />{" "}
        Nuevo contacto
      </button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <span className="word_bold">Agregar nuevo contacto</span>
        </DialogTitle>
        <DialogContent dividers></DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </>
  );
};
