import { Routes, Route } from "react-router-dom";
import App from "../App";
import Home from "../components/Content/Home";
import Movie from "../components/Movie/Movie";
import Content from "../components/Content/Content";
const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/Movie" element={<Movie />} />
        <Route path="/phim/:slug" element={<Content />} />
      </Route>
    </Routes>
  );
};

export default Layout;
