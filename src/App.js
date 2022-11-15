import "./App.css";
import { APIContextProvider } from "./Context/useElements";
import Elements from "./components/Elements";

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
