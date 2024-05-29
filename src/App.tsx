import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import ErrorPage from "pages/ErrorPage";
import Home from "pages/Home";
import Login from "pages/Login";
import Logout from "pages/Logout";
import Matches from "pages/Matches";
import Players from "pages/Players";
import Predictions from "pages/Predictions";
import Ranking from "pages/Ranking";
import Rules from "pages/Rules";

import UserProvider from "contexts/UserContext";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ranking" element={<Ranking />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/players" element={<Players />} />
            <Route path="/predictions" element={<Predictions />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/login/:token" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/error" element={<ErrorPage />} />
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
};

export default App;
