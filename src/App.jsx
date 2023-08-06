import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AddEdit from "./pages/AddEdit";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <ToastContainer position="top-center" />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/add" Component={AddEdit} />
        <Route path="/update/:id" Component={AddEdit} />
      </Routes>
    </div>
  );
}

export default App;
