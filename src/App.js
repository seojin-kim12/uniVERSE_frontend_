import { BrowserRouter, Route, Routes } from "react-router-dom";
import Firstpage from "./pages/firstpage";
import Battle from "./pages/Battle";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Firstpage />} />
          <Route path="/Battle" element={<Battle />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
