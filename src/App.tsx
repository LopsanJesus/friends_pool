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
import Rules from "pages/Rules";

import UserProvider from "contexts/UserContext";

import ProtectedRoute from "components/ProtectedRoute";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/players" element={<Players />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/login/:token" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/predictions" element={<Predictions />} />
            </Route>
            <Route path="/error" element={<ErrorPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
};

export default App;
