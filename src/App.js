import { BrowserRouter, Route, Routes } from "react-router-dom";
import Firstpage from "./pages/firstpage";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Firstpage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
