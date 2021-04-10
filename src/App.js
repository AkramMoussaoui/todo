import React, { useEffect } from "react";
import "./App.css";
import Todos from "./components/Todos";
import Users from "./components/Users";
import { useDispatch } from "react-redux";
import { addUser } from "./Redux/Actions/userActions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addUser());
  }, []);
  return (
    <div className="App">
      <Todos />
      <Users />
    </div>
  );
}

export default App;
