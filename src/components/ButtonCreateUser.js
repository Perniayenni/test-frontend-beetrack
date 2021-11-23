import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import { useForm } from "../hooks/useForm";
import { usersService } from "../services/apiServices";
import { useDispatch } from "react-redux";
import { addUser } from "../actions/users";

export const ButtonCreateUser = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const initialState = { description: "", photo: "", name: "" };
  const [warning, setWarning] = useState("");

  const [formValues, handleInputChange, reset] = useForm(initialState);

  const { description, photo, name } = formValues;

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSaveUser = () => {
    if (description && photo && name) {
      usersService.create({ description, name, photo }).then((resp) => {
        dispatch(addUser(resp));
        reset(initialState);
        handleClose();
        setWarning("");
      });
    } else {
      setWarning("Debe llenar todos los campos....");
    }
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
        <DialogContent dividers className="button_create_user_dialog_content">
          <form className="button_create_user_dialog_form">
            <label className="word_bold">
              URL Imagen de perfil <span className="required">*</span>
            </label>
            <input
              type="text"
              name="photo"
              value={photo}
              onChange={handleInputChange}
            />
            <label className="word_bold">
              Nombre <span className="required">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleInputChange}
            />
            <label className="word_bold">
              Descripción <span className="required">*</span>
            </label>
            <textarea
              type="text"
              name="description"
              value={description}
              onChange={handleInputChange}
            />
            <span>{warning}</span>
            <div className="button_create_user_dialog_content_button_guardar">
              <button
                onClick={handleSaveUser}
                type="button"
                className="button_create_user_dialog_button_guardar"
              >
                Guardar
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};
