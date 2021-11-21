import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import queryString from "query-string";
import { usersService } from "../services/apiServices";
import { setUsers } from "../actions/users";

export const Search = () => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const [query, setquery] = useState(q);
  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    if (query) {
      usersService.index({ q: query }).then((resp) => {
        dispatch(setUsers(resp));
      });
    } else {
      usersService.index().then((response) => {
        dispatch(setUsers(response));
      });
    }
  }, [q]);

  function searching() {
    history.push(`/home?q=${query}`);
  }

  function enterPressed(e) {
    var code = e.keyCode || e.which;
    if (code === 13) {
      searching();
    }
  }

  return (
    <div className="search_content_search">
      <button className="search_button">
        <FontAwesomeIcon className="search_icon" icon={faSearch} />
      </button>
      <input
        className="search_input"
        type="text"
        placeholder="Buscar contacto..."
        maxLength="120"
        value={query}
        onChange={(e) => setquery(e.target.value)}
        onKeyPress={enterPressed.bind(this)}
      ></input>
    </div>
  );
};
