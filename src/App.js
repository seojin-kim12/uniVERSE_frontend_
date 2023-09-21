import { BrowserRouter, Route, Routes } from "react-router-dom";
import Firstpage from "./pages/firstpage";
import "./index.css";
import CompetDetail from "./pages/CompetDetail";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Firstpage />} />
          <Route path="/CompetDetail" element={<CompetDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
