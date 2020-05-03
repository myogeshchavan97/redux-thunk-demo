import axios from "axios";

export const initiateAddUsers = () => {
  return (dispatch) => {
    axios.get("/users").then((response) => {
      console.log(response.data);
      dispatch(addUsers(response.data.results));
    });
  };
};

export const addUsers = (users) => {
  return {
    type: "ADD_USERS",
    users,
  };
};
