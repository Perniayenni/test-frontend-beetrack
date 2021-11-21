import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const Search = () => {
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
      ></input>
    </div>
  );
};
