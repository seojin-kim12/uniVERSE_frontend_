import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mappage1 from "./pages/mappage1";
import Mappage3 from "./pages/mappage3";
import BoothSearch from "./pages/Search/BoothSearch";
import BoothSearchFail from "./pages/Search/BoothSearchFail";
import BoothSearchSuccess from "./pages/Search/BoothSearchSuccess";
import "./index.css";
import Mappage1 from "./pages/mappage1";
import Mappage3 from "./pages/mappage3";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/Mappage1" element={<Mappage1 />} />
          <Route path="/Mappage3" element={<Mappage3 />} />
          <Route path="/BoothSearch" element={<BoothSearch />} />
          <Route path="/BoothSearchFail" element={<BoothSearchFail />} />
          <Route path="/BoothSearchSuccess" element={<BoothSearchSuccess />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
