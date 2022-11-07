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

  var withNormalClass = "";
  var withFieldClass = "";
  var withButtonClass = "";
  var items = [];
  var allStyles = "";

  elements.map((element, index) => {
    var generalStyles = element.style;

    if (element.type === "subscription") {
      var { form } = element;
      items.push(form.fields.items);
      var formStyles = element.form.style;
      var formFieldStyles = form.fields.style;
      var formButtonStyles = form.submitButton.style;
    }

    var styles = {
      ...generalStyles,
      ...formStyles,
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
    withNormalClass =
      withNormalClass +
      "\n" +
      `.${element.type}${index}
  {
      ${normalStyle}
  }`;

    var formFieldStyle = "";
    for (const property in formFieldStyles) {
      var newFormStyle = `${property}: ${formFieldStyles[property]}`;
      newFormStyle = newFormStyle
        .replace(/([A-Z])/g, "-$1")
        .trim()
        .toLowerCase();
      formFieldStyle = formFieldStyle + "\n" + newFormStyle + ";";
    }
    items.map((item, index) => {
      item.map(
        (i, index) =>
          (withFieldClass =
            withFieldClass +
            "\n" +
            `.${i.name}${i.id} 
{
  ${formFieldStyle}
}`)
      );
    });

    var buttonStyle = "";
    for (const property in formButtonStyles) {
      var newButtonStyle = `${property}: ${formButtonStyles[property]}`;
      newButtonStyle = newButtonStyle
        .replace(/([A-Z])/g, "-$1")
        .trim()
        .toLowerCase();
      buttonStyle = buttonStyle + "\n" + newButtonStyle + ";";
    }

    if (element.type === "subscription") {
      withButtonClass =
        withButtonClass +
        "\n" +
        `.${form.submitButton.content}
{
  ${buttonStyle}
}`;
    }
  });

  allStyles = `${withNormalClass}
${withFieldClass}
${withButtonClass}`;

  return (
    <APIContextProvider>
      <div className="App">
        <Helmet>
          <style>{allStyles}</style>
        </Helmet>
        <Elements />
      </div>
    </APIContextProvider>
  );
}

export default App;
