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

  var classData = {
    elements: elements
      .filter((el) => el.type !== "")
      .map((el, index) => ({
        ...el,
        key: index,
        newClass: el.type + index,
      })),
  };

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
