import { useState } from "react";
import { Link } from "react-router-dom";
import "./Silderleft.scss";
import {
  FaHome,
  FaPlay,
  FaRegCalendarAlt,
  FaBars,
  FaBookmark,
  FaFacebookF,
} from "react-icons/fa";
import { FaList } from "react-icons/fa6";
import { RiMovieFill } from "react-icons/ri";

const Silderleft = () => {
  const [showCategory, setShowCategory] = useState(false);
  const [ShowYear, setYear] = useState(false);
  const toggleCategory = () => {
    setShowCategory(!showCategory);
    setYear(false);
  };
  const tooggleYear = () => {
    setYear(!ShowYear);
    setShowCategory(false);
  };

  return (
    <div className="left-content">
      <ul className="all">
        <h3 className="text-center font-bold text-[#fff]">MENU</h3>
        <li className="bg-red-700 text-center">
          <Link to="/">
            <FaHome className="text-xl scroll icon-silde" /> Trang Chủ
          </Link>
        </li>
        <li>
          <Link>
            <FaPlay className="text-xl scroll icon-silde" />
            Xem Ngẫu Nhiên
          </Link>
        </li>
        <li>
          <Link>
            <FaList className="text-xl scroll icon-silde" />
            Tv Series
          </Link>
        </li>
        <li>
          <Link to="/Movie">
            <RiMovieFill className="text-xl scroll icon-silde" />
            Movie
          </Link>
        </li>
        <li onClick={toggleCategory} className="toggle-category">
          <Link>
            <FaBars className="text-xl scroll icon-silde" />
            Thể Loại
          </Link>
        </li>
        {showCategory && (
          <div className="category">
            <ul>
              <li>Tất Cả</li>
              <li>Anime</li>
              <li>Hành Động</li>
              <li>Phiêu Lưu</li>
              <li>Học Đường</li>
            </ul>
          </div>
        )}
        <li onClick={() => tooggleYear()}>
          <Link>
            <FaRegCalendarAlt className="text-xl scroll icon-silde" />
            Năm
          </Link>
        </li>
        {ShowYear && (
          <div className="category">
            <ul>
              <li>Tất Cả</li>
              <li>Anime</li>
              <li>Hành Động</li>
              <li>Phiêu Lưu</li>
              <li>Học Đường</li>
            </ul>
          </div>
        )}
        <li>
          <Link>
            {" "}
            <FaBookmark className="text-xl scroll icon-silde" />
            Trung Quốc
          </Link>
        </li>
        <div className="h5">LIÊN KẾT</div>
        <li className="">
          <Link>
            <FaFacebookF className="text-xl scroll icon-silde" />
            FaceBook
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Silderleft;
