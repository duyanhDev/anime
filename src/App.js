import "./App.scss";
import Header from "./components/Header/Header";
import Silderleft from "./components/SliderLeft/Silderleft";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

      <div className="content-container">
        <div className="silde-left">
          <Silderleft />
        </div>
        <div className="content ">
          <div className="movie-container bg-[#1d3042]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
