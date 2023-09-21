import { BrowserRouter, Route, Routes } from "react-router-dom";
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
