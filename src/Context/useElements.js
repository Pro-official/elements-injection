import React, { useContext, createContext } from "react";
import axios from "axios";
import { useQuery } from "react-query";

const JSONContext = createContext();

export function APIContextProvider({ children }) {
  const { data, isLoading } = useQuery("elements", () => {
    return axios.get(`./Data/elements.json`);
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  // console.log(data.data);

  return (
    <JSONContext.Provider
      value={{
        elements: data?.data,
        success: isLoading,
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
