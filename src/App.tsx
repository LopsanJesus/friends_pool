import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import ErrorPage from "pages/ErrorPage";
import FinalPredictionsPage from "pages/FinalPredictionsPage";
import Home from "pages/Home";
import Login from "pages/Login";
import Logout from "pages/Logout";
import MatchPredictionsPage from "pages/MatchPredictionsPage";
import Matches from "pages/Matches";
import MyPredictionsPage from "pages/MyPredictionsPage";
import Player from "pages/Player";
import Players from "pages/Players";
import Predictions from "pages/Predictions";
import Profile from "pages/Profile";
import Ranking from "pages/Ranking";
import Rules from "pages/Rules";
import ScrapperTest from "pages/ScrapperTest";

import BetsProvider from "contexts/BetsContext";
import UserProvider from "contexts/UserContext";

import ProtectedRoute from "components/ProtectedRoute";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <UserProvider>
        <BetsProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/matches" element={<Matches />} />
              <Route path="/players" element={<Players />} />
              <Route path="/player/:name" element={<Player />} />
              <Route path="/rules" element={<Rules />} />
              <Route path="/ranking" element={<Ranking />} />
              <Route path="/scrapper-test" element={<ScrapperTest />} />
              <Route path="/login/:token" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/profile" element={<Profile />} />
                <Route path="/predictions" element={<Predictions />} />
                <Route
                  path="/predictions/final"
                  element={<FinalPredictionsPage />}
                />
                <Route
                  path="/predictions/matches"
                  element={<MatchPredictionsPage />}
                />
                <Route
                  path="/predictions/my-predictions"
                  element={<MyPredictionsPage />}
                />
              </Route>
              <Route path="/error" element={<ErrorPage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Router>
        </BetsProvider>
      </UserProvider>
    </div>
  );
};

export default App;
