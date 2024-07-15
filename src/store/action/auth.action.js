import { Login, Register } from "../../service/Auth.service";

export const LoginAction = async (dispatch, formData) => {
  try {
    dispatch({ type: "process" });
    const res = await Login(formData);
    if (res.data) {
      dispatch({ type: "login", payload: res.data });
    } else {
      dispatch({ type: "error", payload: res.msg });
    }
  } catch (error) {
    dispatch({ type: "error", payload: res.msg });
  }
};

export const RegisterAction = async (dispatch, formData) => {
  try {
    dispatch({ type: "process" });
    const res = await Register(formData);
    if (res.data) {
      dispatch({ type: "register", payload: res.data });
    } else {
      dispatch({ type: "error", payload: res.msg });
    }
  } catch (error) {
    dispatch({ type: "error", payload: res.msg });
  }
};
