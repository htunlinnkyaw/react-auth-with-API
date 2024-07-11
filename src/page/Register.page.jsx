import React, { useEffect, useState } from "react";
import {
  ButtonComponents,
  ContainerComponents,
  ErrorComponents,
  FormComponents,
  LoadingComponents,
  PreventComponents,
} from "../components";
import useApi from "../hook/useApi";
import { Register } from "../service/Auth.service";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const nav = useNavigate();
  const { handleDealApi, loading, error, data } = useApi(Register);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  useEffect(() => {
    if (data) {
      nav("/");
    }
  }, [data]);

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleDealApi(formData);
  };

  return (
    <PreventComponents fail={"/login"} check={localStorage.getItem("auth")}>
      <ContainerComponents>
        {loading ? (
          <LoadingComponents />
        ) : (
          <>
            <div className="center">
              <div className="w-2/6 mx-auto">
                <h1 className="font-serif text-3xl font-bold mb-5 text-center">
                  Register Your Account
                </h1>
                {error && <ErrorComponents>{error}</ErrorComponents>}
                <form onSubmit={handleSubmit}>
                  <FormComponents
                    onChange={handleInputChange}
                    value={formData.name}
                    label={"Username"}
                    type={"text"}
                    name={"name"}
                  />
                  <FormComponents
                    onChange={handleInputChange}
                    value={formData.email}
                    label={"Email"}
                    type={"email"}
                    name={"email"}
                    placeholder={"example@gmail.com"}
                  />
                  <FormComponents
                    onChange={handleInputChange}
                    value={formData.password}
                    label={"Password"}
                    type={"password"}
                    name={"password"}
                  />
                  <FormComponents
                    onChange={handleInputChange}
                    value={formData.password_confirmation}
                    label={"Confirm Password"}
                    type={"password"}
                    name={"password_confirmation"}
                  />
                  <ButtonComponents
                    type="submit"
                    style={"!rounded bg-orange-400"}
                  >
                    Register
                  </ButtonComponents>
                  <div className="mt-5">
                    <p>
                      Already have an account?{" "}
                      <button
                        onClick={() => nav("/")}
                        className="text-blue-400 underline"
                      >
                        Login
                      </button>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </>
        )}
      </ContainerComponents>
    </PreventComponents>
  );
};

export default RegisterPage;
