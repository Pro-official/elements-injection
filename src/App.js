import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import "./App.css";
import Elements from "./components/Elements";
import { APIContextProvider } from "./Context/JSONContext";

function App() {
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
    var generalStyles = element.style;
    if (element.type === "subscription") {
      var formStyles = element.form.style;
      // var formFieldStyles = element.form.fields.style;
      // var formButtonStyles = element.form.submitButton.style;
    }
    var styles = {
      ...generalStyles,
      ...formStyles,
      // ...formFieldStyles,
      // ...formButtonStyles,
    };
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
  // console.log(withClass);

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
