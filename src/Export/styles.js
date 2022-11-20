import React from "react";
import { Helmet } from "react-helmet";
import { useElements } from "../Context/useElements";

const Style = () => {
  const { elements } = useElements();

  var formFieldStyles = "";
  var formButtonStyles = "";

  var withNormalClass = "";
  var withFieldClass = "";
  var withButtonClass = "";

  var items = [];
  var allStyles = "";

  elements.map((element, index) => {
    var generalStyles = element.style;

    if (element.type === "Subscription") {
      var { form } = element;
      items.push(form.fields.items);
      var formStyles = element.form.style;
      formFieldStyles = form.fields.style;
      formButtonStyles = form.submitButton.style;
    }

    var styles = {
      ...generalStyles,
      ...formStyles,
    };

    // GENERAL ELEMENT STYLES
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

    // FORM INPUT STYLES
    var formFieldStyle = "";
    for (const property in formFieldStyles) {
      let newFormStyle = `${property}: ${formFieldStyles[property]}`;
      newFormStyle = newFormStyle
        .replace(/([A-Z])/g, "-$1")
        .trim()
        .toLowerCase();
      formFieldStyle = formFieldStyle + "\n" + newFormStyle + ";";
      console.log(formFieldStyle);
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

    // FORM BUTTON STYLES
    var buttonStyle = "";
    for (const property in formButtonStyles) {
      var newButtonStyle = `${property}: ${formButtonStyles[property]}`;
      newButtonStyle = newButtonStyle
        .replace(/([A-Z])/g, "-$1")
        .trim()
        .toLowerCase();
      buttonStyle = buttonStyle + "\n" + newButtonStyle + ";";
    }

    if (element.type === "Subscription") {
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
    <div>
      <Helmet>
        <style>{allStyles}</style>
      </Helmet>
    </div>
  );
};

export default Style;
