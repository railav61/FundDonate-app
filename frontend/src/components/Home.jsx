// import Main from "./Main";
// import HomePage from "./HomePage";
import { useNavigate } from "react-router-dom";

function Home({ isAuthenticated }) {
  const navigate = useNavigate();
  return (
    <div>{!isAuthenticated ? navigate("/Main") : navigate("/Homepage")}</div>
  );
}

export default Home;
