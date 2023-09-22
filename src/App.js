import { BrowserRouter, Route, Routes } from "react-router-dom";
import Battle from "./pages/Battle/Battle";
import CompetDetail from "./pages/Battle/CompetDetail";
import Mappage1 from "./pages/mappage/mappage1";
import Mappage3 from "./pages/mappage/mappage3";
import BoothSearch from "./pages/Search/BoothSearch";
import BoothSearchFail from "./pages/Search/BoothSearchFail";
import BoothSearchSuccess from "./pages/Search/BoothSearchSuccess";
import Guestbook from "./pages/Guestbook/Guestbook";
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
          <Route path="/CompetDetail" element={<CompetDetail />} />
          <Route path="/Battle" element={<Battle />} />
          <Route path="/Mappage1" element={<Mappage1 />} />
          <Route path="/Mappage3" element={<Mappage3 />} />
          <Route path="/BoothSearch" element={<BoothSearch />} />
          <Route path="/BoothSearchFail" element={<BoothSearchFail />} />
          <Route path="/BoothSearchSuccess" element={<BoothSearchSuccess />} />
          <Route path="/Guestbook" element={<Guestbook />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
