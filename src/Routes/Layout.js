import { Routes, Route } from "react-router-dom";
import App from "../App";
import Home from "../components/Content/Home";
import Movie from "../components/Movie/Movie";
const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/Movie" element={<Movie />} />
      </Route>
    </Routes>
  );
};

export default Layout;
