import React, { useState } from "react";
import { ButtonComponents, FormComponents } from "../components";
import { useNavigate } from "react-router-dom";
import { addContactData } from "../service/Contact.service";

const ContactAddPage = () => {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await addContactData();

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
