import { usersService } from "../services/apiServices";
import { types } from "../types/types";

export const setUsers = (params) => {
  return (dispatch) => {
    usersService.index().then((response) => {
      dispatch(setCountUser(response));
    });
    usersService.index(params).then((response) => {
      dispatch(users(response));
    });
  };
};

export const setCountUser = (users) => {
  return { type: types.setCountUsers, payload: { count: users.length } };
};

export const setPageUser = (page) => {
  return { type: types.setPageUsers, payload: { page: page } };
};

export const users = (users) => ({
  type: types.users,
  payload: { users },
});
