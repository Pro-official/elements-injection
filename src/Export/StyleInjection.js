let Style = document.createElement("style");
document.getElementsByTagName("head")[0].appendChild(Style);

export function GetStyles(newStyle) {
  if (typeof newStyle === "string") {
    Style.appendChild(document.createTextNode(newStyle));
  }
}
