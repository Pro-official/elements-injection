import "./App.css";
import { APIContextProvider } from "./Context/JSONContext";
import Elements from "./components/Elements";
import Style from "./Styles/Style";

function App() {
  return (
    <APIContextProvider>
      <div className="App">
        <Style />
        <Elements />
      </div>
    </APIContextProvider>
  );
}

export default App;
