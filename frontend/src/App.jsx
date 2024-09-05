import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import First from "./components/First";
import About from "./components/About";
import Form from "./components/Form";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import Payments from "./components/Payments";
import Success from "./components/Success";
import Cancle from "./components/Cancle";
import StickyFooter from "./components/StickyFooter";
import Main from "./components/Main";
import HomePage from "./components/HomePage";

function App() {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  return (
    <Router>
      <div>
        <div className="min-h-screen">
          <First
            user={user}
            loginWithRedirect={loginWithRedirect}
            isAuthenticated={isAuthenticated}
            logout={logout}
          />
          <Routes>
            <Route index element={<Home isAuthenticated={isAuthenticated} />} />
            <Route path="/Main" element={<Main />} />
            <Route path="/Homepage" element={<HomePage />} />
            <Route path="/About" element={<About />} />
            <Route path="/Form" element={<Form />} />
            <Route path="/Payment" element={<Payments />} />
            <Route path="/Success" element={<Success />} />
            <Route path="/Cancel" element={<Cancle />} />
          </Routes>
        </div>
        <div className="relative">
          <StickyFooter />
        </div>
      </div>
    </Router>
  );
}

export default App;
