import "./App.css";
import { APIContextProvider } from "./Context/useElements";
import Elements from "./components/Elements";
// import { GetStyles } from "./Export/StyleInjection";

function App() {
  // GetStyles();

  return (
    <APIContextProvider>
      <div className="App">
        <Elements />
      </div>
    </APIContextProvider>
  );
}

export default App;
