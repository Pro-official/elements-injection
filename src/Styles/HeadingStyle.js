import { GetStyles } from "../App";
import camelCaseParser from "./camelCaseParser";

function HeadingStyle(className, style) {
  const parsedStyle = camelCaseParser(style);
  const newStyle = `.${className} {
    ${parsedStyle}
  }`;
  GetStyles(newStyle);
}

export default HeadingStyle;
