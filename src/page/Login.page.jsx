import React, { useEffect, useState } from "react";
import {
  ButtonComponents,
  ContainerComponents,
  ErrorComponents,
  FormComponents,
  LoadingComponents,
  PreventComponents,
} from "../components";
import { useNavigate } from "react-router-dom";
import useApi from "../hook/useApi";
import { Login } from "../service/Auth.service";
import { useDispatch, useSelector } from "react-redux";
import { LoginAction } from "../store/action/auth.action";

const LoginPage = () => {
  const nav = useNavigate();
  const { loading, error, data, auth } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  // const { handleDealApi, loading, error, data } = useApi(Login);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (data) {
      nav("/home");
    }
  }, [data]);

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handleDealApi(formData);
    LoginAction(dispatch, formData);
    console.log(loading, error, data);
  };

  const handleClick = () => {
    nav("/register");
  };

  return (
    <PreventComponents fail={"/home"} check={localStorage.getItem("auth")}>
      <ContainerComponents>
        {loading ? (
          <LoadingComponents />
        ) : (
          <>
            <div className="center">
              <div className="w-2/6 mx-auto">
                <h1 className="font-serif text-3xl font-bold mb-5 text-center">
                  Login To Your Account
                </h1>
                {error && <ErrorComponents>{error}</ErrorComponents>}
                <form onSubmit={handleSubmit}>
                  <FormComponents
                    value={formData.email}
                    onChange={handleInputChange}
                    label={"Email "}
                    type={"email"}
                    name={"email"}
                    id={"email"}
                    placeholder={"example@gmail.com"}
                  />
                  <FormComponents
                    value={formData.password}
                    onChange={handleInputChange}
                    label={"Password "}
                    type={"password"}
                    name={"password"}
                    id={"password"}
                  />
                  <ButtonComponents
                    style={"!rounded bg-orange-400"}
                    type="submit"
                  >
                    Login
                  </ButtonComponents>
                </form>
                <div className="mt-5">
                  <p>
                    Don't have an account?{" "}
                    <button
                      onClick={handleClick}
                      className="text-blue-400 underline"
                    >
                      Register
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </ContainerComponents>
    </PreventComponents>
  );
};

export default LoginPage;
