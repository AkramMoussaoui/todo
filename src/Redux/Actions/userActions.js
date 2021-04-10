import { ADDUSER } from "../Constants/userConstants";

export const addUser = (users) => {
  return {
    type: ADDUSER,
    payload: users,
  };
};
