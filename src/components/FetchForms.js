import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchFormDetails } from "../services/operations/formApi";

const FetchForms = () => {
  const [forms, setForms] = useState([]);
  const { token } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchForms = async () => {
      const data = await fetchFormDetails(token);
      setForms(data?.data);
      console.log(forms);
    };

    fetchForms();
  }, [token, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">
          All Submitted Forms
        </h2>
        {forms?.length > 0 ? (
          <ul>
            {forms?.map((form) => (
              <li key={form._id} className="mb-4 p-4 border rounded">
                <h3 className="text-lg font-semibold">{form.title}</h3>
                <p>{form.description}</p>
                <p className="text-sm text-gray-600">
                  Submitted by: {form.user.username} ({form.user.email})
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 text-center">No forms submitted yet.</p>
        )}
      </div>
    </div>
  );
};

export default FetchForms;
