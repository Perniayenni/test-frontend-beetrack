import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UserItem } from "./UserItem";
import { setPageUser, setUsers } from "../actions/users";

export const ListUsers = () => {
  const dispatch = useDispatch();
  const { users, limit, count, page } = useSelector((state) => {
    return state.users;
  });

  const npagina = Math.ceil(count / limit);

  const handleNextBoton = () => {
    dispatch(setPageUser(page + 1));
    dispatch(setUsers({ _page: page + 1, _limit: limit }));
  };

  const handlePrevBoton = () => {
    dispatch(setPageUser(page - 1));
    dispatch(setUsers({ _page: page - 1, _limit: limit }));
  };

  return (
    <>
      {users.length == 0 ? (
        <div>Cargando...</div>
      ) : (
        <>
          <div>
            <div className="list_users_titles">
              <div className="list_users_name word_bold">Nombre</div>
              <div className="list_users_description word_bold">
                Descripción
              </div>
            </div>
            {users.map((user) => (
              <UserItem key={user.id} user={user} />
            ))}
          </div>
          <div className="list_users_paginator">
            {page > 1 && (
              <div
                className="list_users_paginator_descripcion word_bold pointer"
                onClick={handlePrevBoton}
              >
                <FontAwesomeIcon
                  className="list_users_paginator_icon"
                  icon={faArrowAltCircleLeft}
                />
                Anterior página{" "}
              </div>
            )}

            {npagina > page && (
              <div className="word_bold pointer" onClick={handleNextBoton}>
                Siguiente página{" "}
                <FontAwesomeIcon
                  className="list_users_paginator_icon"
                  icon={faArrowAltCircleRight}
                />
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};
