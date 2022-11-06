import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const JSONContext = createContext();

export function APIContextProvider({ children }) {
  const [elements, setElements] = useState([]);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`./Data/elements.json`);
      setSuccess(false);
      setElements(data);
      setSuccess(true);
    }
    fetchData();
  }, []);

  const classData = {
    elements: elements
      .filter((el) => el.type !== "")
      .map((el, index) => ({
        ...el,
        key: index,
        newClass: el.type + index,
        // newFormData: el.form.fields.items.id,
      })),
    newFormData: elements
      .filter((el) => el.type === "subscription")
      .map((el) => el.form.fields.items),
  };

  console.log(typeof classData.newFormData);

  // const formData = {
  //   formFieldItems: elements.map((el) => (el.form.fields).map((el, index) => {
  //     ...el,
  //     key: index,
  //     newFormClass: el.id + index,
  //   })),
  // };

  return (
    <JSONContext.Provider
      value={{
        elements: classData.elements,
        success: success,
      }}
    >
      {children}
    </JSONContext.Provider>
  );
}

export function useElements() {
  const context = useContext(JSONContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
