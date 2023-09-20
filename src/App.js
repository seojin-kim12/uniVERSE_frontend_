import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mappage1 from "./pages/mappage1";
import BoothSearch from "./pages/Search/BoothSearch";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/Mappage1" element={<Mappage1 />} />
          <Route path="/BoothSearch" element={<BoothSearch />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
