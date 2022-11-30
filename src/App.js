import "./App.css";
import { APIContextProvider } from "./Context/useElements";
import Elements from "./components/Elements";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <APIContextProvider>
        <div className="App">
          <Elements />
        </div>
      </APIContextProvider>
    </QueryClientProvider>
  );
}

export default App;
