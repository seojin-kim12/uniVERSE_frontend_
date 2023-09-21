import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import IntroFestival from "./pages/introduce/IntroFestival";
import IntroCommittee from "./pages/introduce/IntroCommittee";
import IntroLion from "./pages/introduce/IntroLion";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/Festival" element={<IntroFestival />} />
          <Route path="/Committee" element={<IntroCommittee />} />
          <Route path="/" element={<IntroLion />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
