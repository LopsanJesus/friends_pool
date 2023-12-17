import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Rules from "./pages/Rules";
import Players from "./pages/Players";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/players" element={<Players />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
