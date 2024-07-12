import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Form from "./components/Form";
import FetchForms from "./components/FetchForms";
import { useSelector } from "react-redux";

function App() {
  const { user } = useSelector((store) => store.auth);

  return (
    <div className="max-w-screen min-h-screen bg-black flex flex-col font-inter">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {user && user.isAdmin ? (
          <Route path="/fetch-forms" element={<FetchForms />} />
        ) : (
          <Route path="/form" element={<Form />} />
        )}
      </Routes>
    </div>
  );
}

export default App;
