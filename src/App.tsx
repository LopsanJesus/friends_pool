import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Rules from "./pages/Rules";
import Ranking from "./pages/Ranking";
import Matches from "./pages/Matches";
import Players from "./pages/Players";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/players" element={<Players />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
