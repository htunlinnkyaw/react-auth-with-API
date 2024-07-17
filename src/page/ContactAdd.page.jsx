import React, { useEffect, useState } from "react";
import { ButtonComponents, FormComponents } from "../components";
import { useLocation, useNavigate } from "react-router-dom";
import { addContactData, editContactData } from "../service/Contact.service";

const ContactAddPage = () => {
  const nav = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    if (location.state?.edit) {
      const { name, phone, email, address } = location.state.data;
      setFormData({ name, phone, email, address });
    }
  }, []);

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res;
    if (location.state?.edit) {
      res = await editContactData(location.state.id, formData);
    } else {
      res = await addContactData(formData);
    }

    if (res) {
      nav("/home");
    }

    console.log(res);
  };

  return (
    <div className="mt-5">
      <div className="w-[30%] mx-auto">
        <h1 className="text-2xl font-bold font-serif text-center">
          Create Your Contact
        </h1>
        <form onSubmit={handleSubmit}>
          <FormComponents
            value={formData.name}
            onChange={handleInputChange}
            label={"Name"}
            type={"text"}
            name={"name"}
          />
          <FormComponents
            value={formData.phone}
            onChange={handleInputChange}
            label={"Phone"}
            type={"text"}
            name={"phone"}
          />
          <FormComponents
            value={formData.email}
            onChange={handleInputChange}
            label={"Email"}
            type={"text"}
            name={"email"}
          />
          <FormComponents
            value={formData.address}
            onChange={handleInputChange}
            label={"Address"}
            type={"text"}
            name={"address"}
          />
          <ButtonComponents type={"submit"} style={"!bg-orange-400 !rounded"}>
            Create Contact
          </ButtonComponents>
        </form>
      </div>
    </div>
  );
};

export default ContactAddPage;
