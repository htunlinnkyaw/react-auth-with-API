import React, { useState } from "react";

const useApi = (fun) => {
  const [apiData, setApiData] = useState({
    loading: false,
    error: null,
    data: null,
  });

  const handleDealApi = async (formData) => {
    setApiData((prev) => ({ ...prev, loading: true }));
    const res = await fun(formData);
    if (res.error) {
      setApiData((prev) => ({ ...prev, loading: false, error: res.msg }));
    } else {
      setApiData((prev) => ({ ...prev, loading: false, data: res.data }));
    }
  };

  const { loading, error, data } = apiData;

  return { handleDealApi, loading, error, data };
};

export default useApi;
