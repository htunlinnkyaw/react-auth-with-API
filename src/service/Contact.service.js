import { api } from "./Api";

export const getProfile = async () => {
  try {
    const res = await api.get("/user-profile");
    return res;
  } catch (e) {
    return { error: true, msg: e.message };
  }
};

export const addContactData = async (formData) => {
  try {
    const res = await api.post("/contact", formData);
    if (res.data) {
      return res.data.success;
    }
  } catch (e) {
    return { error: true, msg: e.message };
  }
};

export const getContactData = async () => {
  try {
    const res = await api.get("/contact");
    if (res.data) {
      const contactData = res.data.contacts.data;
      return contactData;
    }
  } catch (e) {
    return { error: true, msg: e.message };
  }
};

export const getSingleData = async (id) => {
  try {
    const res = await api.get(`/contact/${id}`);
    if (res.data) {
      return res.data.contact;
    }
  } catch (e) {
    return { error: true, msg: e.message };
  }
};
