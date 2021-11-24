import React, { useEffect } from "react";
import { setUsers } from "../actions/users";
import { useDispatch, useSelector } from "react-redux";
import { ListUsers } from "../components/ListUsers";
import { Search } from "../components/Search";
import { ButtonCreateUser } from "../components/ButtonCreateUser";

export const Home = () => {
  const dispatch = useDispatch();
  const { limit } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(setUsers({ _page: 1, _limit: limit }));
  }, []);

  return (
    <div className="home_content">
      <div className="home_title">
        <span className="home_title_test">Test</span>{" "}
        <span className="home_title_beetrack"> Beetrack</span>
      </div>
      <div className="home_content_search">
        <div className="home_search">
          <Search />
        </div>
        <div className="home_button">
          {" "}
          <ButtonCreateUser />
        </div>
      </div>
      <div>
        <ListUsers />
      </div>
    </div>
  );
};
