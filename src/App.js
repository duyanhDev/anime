import "./App.scss";
import Header from "./components/Header/Header";
import Silderleft from "./components/SliderLeft/Silderleft";
import { Outlet } from "react-router-dom";
import { FaHome, FaBars, FaFire } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import Bowser from "bowser";
function App() {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [show, setShow] = useState(false);
  useEffect(() => {
    const browser = Bowser.getParser(window.navigator.userAgent);
    const osName = browser.getOSName();
    const handleResize = () => {
      setScreenSize({
        window: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSliderBar = () => {
    setShow((prevShow) => !prevShow);
  };

  const HomeBtn = useRef(null);

  const HandleCheckBtn = (e) => {
    if (HomeBtn.current && !HomeBtn.current.contains(e.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", HandleCheckBtn);

    return () => {
      document.removeEventListener("mousedown", HandleCheckBtn);
    };
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

      <div className="content-container">
        <div className="silde-left" ref={HomeBtn}>
          {screenSize.width >= 390 && screenSize.width <= 840 ? (
            show && <Silderleft />
          ) : (
            <Silderleft />
          )}
        </div>
        <div className="mobile:w-full pc:w-3/4 content  ">
          <div className="movie-container bg-[#1d3042]  ">
            <Outlet />
          </div>
        </div>
      </div>

      {screenSize.width >= 390 && screenSize.width <= 840 && (
        <div className="slider-bottom">
          <FaHome className="text-xl text-[#fff]" />
          <FaBars
            className="text-xl text-[#fff]"
            onClick={() => handleSliderBar()}
          />
          <FaFire className="text-xl text-[#fff]" />
          <FaHome className="text-xl text-[#fff]" />
        </div>
      )}
    </div>
  );
}

export default App;
