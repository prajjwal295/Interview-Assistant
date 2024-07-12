import { apiConnector } from "../apiconnector";
import { endpoints } from "../apis";
import toast from "react-hot-toast";

const { SIGNUP_API, LOGIN_API } = endpoints;

export const signup = async ({
  username,
  email,
  password,
  confirmPassword,
}) => {
  let data;
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("POST", SIGNUP_API, {
      username,
      email,
      password,
      confirmPassword,
    });

    console.log("Signup API Response.....", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    data = response.data.user;

    toast.success("Signup Successfull");
  } catch (error) {
    console.log("Signnp API ERROR............", error);
    toast.error("Signup Error");
  }

  toast.dismiss(toastId);

  return data;
};

export const login = async ({ email, password }) => {
  let data;
  const toastId = toast.loading("Loading...");

  try {
    const response = await apiConnector("POST", LOGIN_API, {
      email,
      password,
    });

    console.log("Login API Response.....", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    data = response.data;

    toast.success("Login Successfull");
    console.log(response);
  } catch (error) {
    console.log("LOGIN API ERROR............", error);
    toast.error(error.response.data.message);
  }

  toast.dismiss(toastId);

  return data;
};
