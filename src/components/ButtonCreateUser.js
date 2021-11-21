import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export const ButtonCreateUser = () => {
  return (
    <button className="button_create_user_button">
      <FontAwesomeIcon
        className="button_create_user_icon"
        icon={faPlusCircle}
      />{" "}
      Nuevo contacto
    </button>
  );
};
