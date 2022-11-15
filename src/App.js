import "./App.css";
import { APIContextProvider } from "./Context/useElements";
import Elements from "./components/Elements";
// import Style from "./Styles/Style";

let Style = document.createElement("style");
document.getElementsByTagName("head")[0].appendChild(Style);

export function GetStyles(newStyle) {
  if (typeof newStyle === "string") {
    Style.appendChild(document.createTextNode(newStyle));
  }
}

function App() {
  return (
    <APIContextProvider>
      <div className="App">
        <Elements />
      </div>
    </APIContextProvider>
  );
}

export default App;
