import React, { useEffect, useState } from "react";
import { getContactData } from "../service/Contact.service";
import { ContactCardComponents, LoadingComponents } from "../components";

const ContactPage = () => {
  const [items, setItems] = useState({
    loading: true,
    data: null,
    error: null,
  });

  useEffect(() => {
    (async () => {
      setItems((prev) => ({ ...prev, loading: true }));
      const res = await getContactData();
      if (res.error) {
        setItems((prev) => ({ ...prev, loading: false, error: res.msg }));
      } else {
        setItems((prev) => ({ ...prev, loading: false, data: res }));
      }
      console.log(res);
    })();
  }, []);

  return (
    <div className="container mx-auto max-w-screen-xl mt-5 h-screen">
      {items.loading ? (
        <LoadingComponents />
      ) : (
        <>
          {items.error ? (
            <h1>{items.error}</h1>
          ) : (
            items.data.map((i) => <ContactCardComponents key={i.id} data={i} />)
          )}
        </>
      )}
    </div>
  );
};

export default ContactPage;
