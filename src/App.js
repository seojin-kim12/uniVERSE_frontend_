import { BrowserRouter, Route, Routes } from "react-router-dom";
import Firstpage from "./pages/firstpage";
import "./index.css";
import Mappage1 from "./pages/mappage1";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/Mappage1" element={<Mappage1 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
