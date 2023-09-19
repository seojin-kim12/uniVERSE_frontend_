import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import IntroFestival from "./pages/introduce/IntroFestival";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<IntroFestival />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
