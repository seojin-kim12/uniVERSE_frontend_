import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import IntroFestival from "./pages/introduce/IntroFestival";
import IntroCommittee from "./pages/introduce/IntroCommittee";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* <Route path="/" element={<IntroFestival />} /> */}
          <Route path="/" element={<IntroCommittee />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
