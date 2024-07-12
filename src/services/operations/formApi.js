import toast from "react-hot-toast";
import { endpoints } from "../apis";
import { apiConnector } from "../apiconnector";
const { CREATE_FORM_API, FETCH_FORM_API } = endpoints;

export const createForm = async (formData, token) => {
  let data;
  const toastId = toast.loading("Loading...");

  try {
    const response = await apiConnector(
      "POST",
      CREATE_FORM_API,
      {
        formData,
      },
      {
        Authorization: `Bearer ${token}`,
      }
    );

    console.log("form API Response.....", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    data = response.data;

    toast.success("form created Successfull");
    console.log(response);
  } catch (error) {
    console.log("form API ERROR............", error);
    toast.error(error.response.data.message);
  }

  toast.dismiss(toastId);

  return data;
};

export const fetchFormDetails = async (token) => {
  let data;
  const toastId = toast.loading("Loading...");

  console.log(token);

  try {
    const response = await apiConnector("GET", FETCH_FORM_API, null, {
      Authorization: `Bearer ${token}`,
    });

    console.log("form fetch api Response.....", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    data = response.data;

    toast.success("form detail fetched Successfull");
    console.log(response);
  } catch (error) {
    console.log("form details fetched ERROR............", error);
    toast.error(error.response.data.message);
  }

  toast.dismiss(toastId);

  return data;
};
