import { Link } from "react-router-dom";
import "./Header.scss";
import { CiSearch } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";
const Header = () => {
  return (
    <div className="container-header flex justify-between items-center mx-2">
      <div className="header-title">
        <p className="text-[#fff] font-bold text-2xl">
          ANIME<span className="text-[#35f36b]">AZ</span>
        </p>
      </div>

      <div className="header-search w[20%]  flex">
        <input
          type="text"
          className="input-search w-3/5 bg-[#353340] outline-white h-8 rounded-lg "
          placeholder="Tìm kiếm anime"
        />
        <span className="icon-search">
          <CiSearch />
        </span>
      </div>
      <div className="header-login">
        <span className="icon-login ">
          {" "}
          <IoLogOutOutline />
        </span>
        <p className="text-[#333] ">Đăng Nhập</p>
      </div>
    </div>
  );
};

export default Header;
