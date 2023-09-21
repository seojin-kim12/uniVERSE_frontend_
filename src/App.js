import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mappage1 from "./pages/mappage1";
import BoothSearch from "./pages/Search/BoothSearch";
import BoothSearchFail from "./pages/Search/BoothSearchFail";
import BoothSearchSuccess from "./pages/Search/BoothSearchSuccess";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/Mappage1" element={<Mappage1 />} />
          <Route path="/BoothSearch" element={<BoothSearch />} />
          <Route path="/BoothSearchFail" element={<BoothSearchFail />} />
          <Route path="/BoothSearchSuccess" element={<BoothSearchSuccess />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
