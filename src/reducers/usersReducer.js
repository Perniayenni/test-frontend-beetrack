import { types } from "../types/types";

const initialState = {
  users: [],
  count: 0,
  limit: 6,
  page: 1,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.users:
      return { ...state, users: action.payload.users };
    case types.setCountUsers:
      return { ...state, count: action.payload.count };
    case types.setPageUsers:
      return { ...state, page: action.payload.page };
    default:
      return state;
  }
};
