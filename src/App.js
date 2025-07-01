import { BrowserRouter, Route, Routes } from "react-router-dom";
import Battle from "./pages/Battle/Battle";
import CompetDetail from "./pages/Battle/CompetDetail";
import Mappage1 from "./pages/mappage/mappage1";
import Boothdetail from "./pages/mappage/Boothdetail";
import BoothSearch from "./pages/Search/BoothSearch";
import BoothSearchFail from "./pages/Search/BoothSearchFail";
import BoothSearchSuccess from "./pages/Search/BoothSearchSuccess";
import Guestbook from "./pages/Guestbook/Guestbook";
import "./index.css";
import IntroFestival from "./pages/introduce/IntroFestival";
import IntroCommittee from "./pages/introduce/IntroCommittee";
import IntroLion from "./pages/introduce/IntroLion";
import Timetable from "./pages/Timetable";
import Firstpage from "./pages/Firstpage";

// 다른 페이지로 자연스럽게 넘어가기 위해 추가함
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <div>
          <Routes>
            <Route path="/" element={<Firstpage />} />
            <Route path="/Festival" element={<IntroFestival />} />
            <Route path="/Committee" element={<IntroCommittee />} />
            <Route path="/IntroLion" element={<IntroLion />} />
            <Route path="/CompetDetail" element={<CompetDetail />} />
            <Route path="/Battle" element={<Battle />} />
            <Route path="/Mappage1" element={<Mappage1 />} />
            <Route path="/booth-detail/:boothId" element={<Boothdetail />} />
            <Route path="/BoothSearch" element={<BoothSearch />} />
            <Route path="/BoothSearchFail" element={<BoothSearchFail />} />
            <Route
              path="/BoothSearchSuccess"
              element={<BoothSearchSuccess />}
            />
            <Route path="/Guestbook" element={<Guestbook />} />
            <Route path="/Timetable" element={<Timetable />} />
          </Routes>
        </div>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
