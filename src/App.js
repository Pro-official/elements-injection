import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import "./App.css";
import Elements from "./components/Elements";
import { APIContextProvider } from "./Context/JSONContext";

function App() {
  // const [elements] = useElements();
  const [elements, setElements] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`./Data/elements.json`);
      setElements(data);
    }
    fetchData();
  }, []);

  var withClass = "";
  elements.map((element, index) => {
    var styles = element.style;
    var normalStyle = "";
    for (const property in styles) {
      var newStyle = `${property}: ${styles[property]}`;
      newStyle = newStyle
        .replace(/([A-Z])/g, "-$1")
        .trim()
        .toLowerCase();
      normalStyle = normalStyle + "\n" + newStyle + ";";
    }
    withClass =
      withClass +
      "\n" +
      `.${element.type}${index}
  {
      ${normalStyle}
  }`;
  });

  return (
    <APIContextProvider>
      <div className="App">
        <Helmet>
          <style>{withClass}</style>
        </Helmet>
        <Elements />
      </div>
    </APIContextProvider>
  );
}

export default App;
