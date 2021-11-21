import { types } from "../types/types";

const initialState = {
  users: [],
  loading: false,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setUsers:
      return { ...state, users: action.payload.users };
    case types.loading:
      return { ...state, loading: action.payload.loading };
    case types.deleteUser:
      const newUsers = state.users.filter(
        (user) => user.id !== action.payload.id
      );
      debugger;
      return { ...state, users: newUsers };
    default:
      return state;
  }
};
