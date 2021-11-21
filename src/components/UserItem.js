import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Button,
} from "@material-ui/core";
import React, { useState } from "react";
import { usersService } from "../services/apiServices";
import { useDispatch } from "react-redux";
import { deleteUser } from "../actions/users";

export const UserItem = ({ user }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleDeleteUser = () => {
    usersService.delete(user.id).then((response) => {
      dispatch(deleteUser(user.id));
      setOpen(false);
    });
  };
  return (
    <>
      <div className="user_item_content ">
        <div className="user_item_name_content">
          <div className="user_item_content_photo">
            <img className="user_item_photo" src={user.photo} />
          </div>
          <div className="user_item_name word_bold ">
            {user.name}{" "}
            <span
              className="user_item_name_delete pointer"
              onClick={() => setOpen(true)}
            >
              Eliminar
            </span>
          </div>
        </div>
        <div className="user_item_description_content">{user.description}</div>
      </div>
      <Dialog aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title">
          <span className="word_bold">Eliminar</span>
        </DialogTitle>
        <DialogContent dividers>
          ¿Seguro que quiere eliminar el usuario {user.name}?
        </DialogContent>
        <DialogActions>
          <button onClick={() => setOpen(false)} color="primary">
            Cancelar
          </button>
          <button onClick={handleDeleteUser} color="primary">
            Aceptar
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
};
