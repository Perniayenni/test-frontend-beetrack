import React from "react";
import { useSelector } from "react-redux";
import { UserItem } from "./UserItem";

export const ListUsers = () => {
  const { users, loading } = useSelector((state) => state.users);
  return (
    <>
      <div className="list_users_titles">
        <div className="list_users_name word_bold">Nombre</div>
        <div className="list_users_description word_bold">Descripción</div>
      </div>
      {users.map((user) => (
        <UserItem user={user} />
      ))}
    </>
  );
};
