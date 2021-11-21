import React from "react";

export const UserItem = ({ user }) => {
  return (
    <div className="user_item_content pointer">
      <div className="user_item_name_content">
        <div className="user_item_content_photo">
          <img className="user_item_photo" src={user.photo} />
        </div>
        <div className="user_item_name word_bold">
          {user.name} <span className="user_item_name_delete">Eliminar</span>
        </div>
      </div>
      <div className="user_item_description_content">{user.description}</div>
    </div>
  );
};
