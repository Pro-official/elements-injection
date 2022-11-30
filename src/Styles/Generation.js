import camelCaseParser from "./camelCaseParser";
import TypeCamelCase from "./TypeCamelCase";
import styledElements from "./index";
const styles = [];

const styleGenerate = (elements) => {
  elements.forEach((element) => {
    const className = `.${element.type}-${element.id}`;
    const style = element.style
      ? camelCaseParser(element.style)
      : camelCaseParser(element.form.style);
    const myStyles = styledElements[`${TypeCamelCase(element.type)}Style`];
    styles.push(myStyles(className, style));

    if (Array.isArray(element.content)) {
      styleGenerate(element.content);
    }

    if (element.form) {
      let className = `
      .formButton1`;
      styles.push(
        className,
        `{
            ${camelCaseParser(element.form.submitButton.style)}
        }`
      );
      element.form.fields.items.forEach((i, index) => {
        className = `
        .fromInput${index}`;
        styles.push(
          className,
          `{
            ${camelCaseParser(element.form.fields.style)}
        }`
        );
      });
    }
  });

  return styles;
};

export default styleGenerate;
