const BASE_URL = process.env.REACT_APP_BASE_URL;

export const endpoints = {
  SIGNUP_API: `${BASE_URL}api/v1/auth/signup`,
  LOGIN_API: `${BASE_URL}api/v1/auth/login`,
  CREATE_FORM_API: `${BASE_URL}api/v1/auth/createForm`,
  FETCH_FORM_API: `${BASE_URL}api/v1/auth/getAllForms`,
};
