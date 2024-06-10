import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Header.scss";
import { CiSearch } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import image11 from "../../assets/img/11.jpg";
import { useEffect, useState } from "react";

const Header = (props) => {
  const Navigate = useNavigate();
  let location = useLocation();
  const [name, setName] = useState("");

  useEffect(() => {
    if (location.state && location.state.user) {
      location.state.user.forEach((item) => {
        setName(item.username);
      });
    }
  }, [location.state]);

  const handleLogout = () => {
    Navigate("/login");
    setName("");
    if (location.state) {
      location.state.user = []; // Reset the user state
    }
  };
  console.log(name);
  return (
    <div className="container-header flex justify-between items-center mx-2">
      <div className="header-title">
        <p className="text-[#fff] font-bold text-2xl">
          ANIME<span className="text-[#35f36b]">AZ</span>
        </p>
      </div>

      <Tippy
        interactive
        trigger="click"
        render={(attrs) => (
          <div className="serach_fiter" {...attrs}>
            <div className="search_title flex items-center  text-[#f0e2e2] font-normal text-xl cursor-pointer">
              {" "}
              <CiSearch />
              Kết quả tìm kiếm từ khóa
            </div>
            <div className=" flex justify-between mt-3 border-b-2">
              <span className="text-[#f0e2e2] font-bold  text-xs cursor-pointer">
                ANIME
              </span>
              <span className="text-[#f0e2e2] font-bold  text-xs cursor-pointer">
                XEM THÊM
              </span>
            </div>

            <div className="content-search">
              <Link className="flex">
                <img
                  src={image11}
                  className="w-12 h-12 object-cover"
                  alt="loi"
                />
                <span className="text-[#fff] font-light ml-2">
                  Maou no Ore ga Dorei Elf wo Yome ni Shitanda ga, Dou Medereba
                  Ii?
                </span>
              </Link>
              <p>
                Khi phù thủy Zagan quyết định tham gia vào một cuộc đấu giá bán
                hàng hóa của Archdemon Marchosias hiện đã chết, anh ta hy vọng
                sẽ tìm thấy những vật phẩm có sức mạnh chưa từng thấy. Thay vào
                đó, những gì anh ta tìm thấy là một yêu tinh nô lệ tóc trắng
                hiếm hoi tên là Nephilia, và anh ta ngay lập tức chi tất cả tiền
                của mình để mua cô ấy, khiến những người xung quanh hoang mang.
                Tuy nhiên, lý do bí mật đằng sau khoản đầu tư của Zagan là anh
                đã thực sự yêu cô từ cái nhìn đầu tiên. Thật không may, Zagan có
                một vấn đề: anh ta kém cỏi về mặt xã hội và không biết cách thể
                hiện cảm xúc thật của mình, dẫn đến nhiều hiểu lầm giữa anh ta
                và người bạn đồng hành mới. Nhưng dần dần, cả hai bắt đầu hiểu
                nhau, và tình yêu bắt đầu nở rộ..
              </p>
            </div>
            <div className="content-search">
              <Link className="flex">
                <img
                  className="w-12 h-12 object-cover"
                  src={image11}
                  alt="loi"
                />
                <span className="text-[#fff] font-light ml-2">
                  Maou no Ore ga Dorei Elf wo Yome ni Shitanda ga, Dou Medereba
                  Ii?
                </span>
              </Link>
              <p>
                Khi phù thủy Zagan quyết định tham gia vào một cuộc đấu giá bán
                hàng hóa của Archdemon Marchosias hiện đã chết, anh ta hy vọng
                sẽ tìm thấy những vật phẩm có sức mạnh chưa từng thấy. Thay vào
                đó, những gì anh ta tìm thấy là một yêu tinh nô lệ tóc trắng
                hiếm hoi tên là Nephilia, và anh ta ngay lập tức chi tất cả tiền
                của mình để mua cô ấy, khiến những người xung quanh hoang mang.
                Tuy nhiên, lý do bí mật đằng sau khoản đầu tư của Zagan là anh
                đã thực sự yêu cô từ cái nhìn đầu tiên. Thật không may, Zagan có
                một vấn đề: anh ta kém cỏi về mặt xã hội và không biết cách thể
                hiện cảm xúc thật của mình, dẫn đến nhiều hiểu lầm giữa anh ta
                và người bạn đồng hành mới. Nhưng dần dần, cả hai bắt đầu hiểu
                nhau, và tình yêu bắt đầu nở rộ..
              </p>
            </div>
            <div className="content-search">
              <Link className="flex">
                <img
                  className="w-12 h-12 object-cover"
                  src={image11}
                  alt="anhloi"
                />
                <span className="text-[#fff] font-light ml-2">
                  Maou no Ore ga Dorei Elf wo Yome ni Shitanda ga, Dou Medereba
                  Ii?
                </span>
              </Link>
              <p>
                Khi phù thủy Zagan quyết định tham gia vào một cuộc đấu giá bán
                hàng hóa của Archdemon Marchosias hiện đã chết, anh ta hy vọng
                sẽ tìm thấy những vật phẩm có sức mạnh chưa từng thấy. Thay vào
                đó, những gì anh ta tìm thấy là một yêu tinh nô lệ tóc trắng
                hiếm hoi tên là Nephilia, và anh ta ngay lập tức chi tất cả tiền
                của mình để mua cô ấy, khiến những người xung quanh hoang mang.
                Tuy nhiên, lý do bí mật đằng sau khoản đầu tư của Zagan là anh
                đã thực sự yêu cô từ cái nhìn đầu tiên. Thật không may, Zagan có
                một vấn đề: anh ta kém cỏi về mặt xã hội và không biết cách thể
                hiện cảm xúc thật của mình, dẫn đến nhiều hiểu lầm giữa anh ta
                và người bạn đồng hành mới. Nhưng dần dần, cả hai bắt đầu hiểu
                nhau, và tình yêu bắt đầu nở rộ..
              </p>
            </div>
          </div>
        )}
      >
        <div className="header-search w[20%]  flex relative">
          <input
            type="text"
            className="input-search w-3/5 bg-[#353340] outline-white h-8 rounded-lg "
            placeholder="Tìm kiếm anime"
          />
          <span className="icon-search">
            <CiSearch />
          </span>
        </div>
      </Tippy>

      <div className="header-login">
        <span className="icon-login ">
          {" "}
          <IoLogOutOutline />
        </span>
        {name && name.length > 0 ? (
          <p className="text-[#333]" onClick={() => handleLogout()}>
            {name}
          </p>
        ) : (
          <p className="text-[#333]" onClick={() => Navigate("/login")}>
            Đăng Nhập
          </p>
        )}
      </div>
    </div>
  );
};

export default Header;
