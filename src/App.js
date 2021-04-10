import React, { useEffect } from "react";
import "./App.css";
import Todos from "./components/Todos";
import Users from "./components/Users";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "./Redux/Actions/userActions";

function App() {
  const dispatch = useDispatch();
  const getUsers = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch(addUser(response.data));
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="App">
      <Todos />
      <Users />
    </div>
  );
}

export default App;
