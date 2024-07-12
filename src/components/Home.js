import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const { user } = useSelector((store) => store.auth);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg text-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          Welcome to MyApp
        </h2>
        {user ? (
          <>
            <h3 className="text-xl font-semibold mb-4">
              Hello, {user.username}!
            </h3>
            <p className="text-gray-700 mb-6">
              Welcome back to MyApp. You can create a new form or view your
              submissions.
            </p>
            <div className="flex justify-center space-x-4">
              <Link to={user.isAdmin ? "/fetch-forms" : "/form"}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  {user.isAdmin ? "Fetch All Forms" : "Create Form"}
                </button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <p className="text-gray-700 mb-6">
              Please log in to create a form or view your submissions.
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/login">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Log In
                </button>
              </Link>
              <Link to="/signup">
                <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Sign Up
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
