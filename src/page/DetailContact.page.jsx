import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleData } from "../service/Contact.service";
import { LoadingComponents } from "../components";

const DetailContactPage = () => {
  const { id } = useParams();

  const [items, setItems] = useState({
    loading: true,
    data: null,
    error: null,
  });

  useEffect(() => {
    (async () => {
      setItems((prev) => ({ ...prev, loading: true }));
      const res = await getSingleData(id);
      if (res.error) {
        setItems((prev) => ({ ...prev, loading: false, error: res.msg }));
      } else {
        setItems((prev) => ({ ...prev, loading: false, data: res }));
      }
      //   console.log(res);
    })();
  }, []);

  return (
    <div className="max-w-screen-xl container mx-auto mt-5">
      {items.loading ? (
        <LoadingComponents />
      ) : (
        <>
          {items.error ? (
            <h1>{items.error}</h1>
          ) : (
            <>
              <div className="max-w-screen-xl my-5 mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="space-y-3 flex items-center flex-col">
                  <ul className="w-[50%] mx-auto">
                    <li>Name - {items.data.name}</li>
                    <li>Phone - {items.data.phone}</li>
                    <li>
                      Email -{" "}
                      {items.data.email === null
                        ? "Unavailable"
                        : items.data.email}{" "}
                    </li>
                    <li>
                      Address -{" "}
                      {items.data.address === null
                        ? "Unavailable"
                        : items.data.address}
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default DetailContactPage;
