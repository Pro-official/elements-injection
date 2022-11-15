import { GetStyles } from "../App";
import camelCaseParser from "./camelCaseParser";

function SubscriptionStyle(className, style, buttonClass, buttonStyle) {
  const parsedStyle = camelCaseParser(style);
  const parsedButtonStyle = camelCaseParser(buttonStyle);
  const newStyle = `.${className} {
    ${parsedStyle}
  }
  .${buttonClass} {
    ${parsedButtonStyle}
  }
  `;
  // console.log(newStyle);
  GetStyles(newStyle);
}

export default SubscriptionStyle;
