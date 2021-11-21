import { types } from "../types/types";

export const setUsers = (users) => {
  return { type: types.setUsers, payload: { users } };
};

export const setLoading = (loading) => {
  return { type: types.loading, payload: { loading } };
};

export const deleteUser = (id) => {
  return { type: types.deleteUser, payload: { id } };
};
