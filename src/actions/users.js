import { types } from "../types/types";

export const setUsers = (users) => {
  return { type: types.setUsers, payload: { users } };
};

export const setLoading = (loading) => {
  return { type: types.loading, payload: { loading } };
};
