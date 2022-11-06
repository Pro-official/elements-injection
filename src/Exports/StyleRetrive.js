import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export const StyleRetrive = () => {
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

  elements.forEach(myStyles);
  function myStyles(value) {
    return value;
  }
};
