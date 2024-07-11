import { api } from "./Api";

export const Register = async (data) => {
  try {
    console.log(data);
    const res = await api.post("/register", data);
    return res;
  } catch (e) {
    console.log(e);
    return { error: true, msg: e.message };
  }
};

export const Login = async (formData) => {
  try {
    const { data } = await api.post("/login", formData);

    if (data.token) {
      localStorage.setItem("auth", JSON.stringify(data.token));
    }

    return { data };
  } catch (e) {
    console.log(e);
    return { error: true, msg: e.message };
  }
};
