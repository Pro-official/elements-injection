let Style = document.createElement("style");
document.getElementsByTagName("head")[0].appendChild(Style);

var newStyle = "";
export function GetStyles(styles) {
  if (typeof styles === "string") {
    newStyle = newStyle + "\n" + styles;
    // console.log(newStyle);
    // Style.appendChild(document.createTextNode(newStyle));
  }
}
