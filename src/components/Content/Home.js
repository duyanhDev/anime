import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "./../../assets/img/dragon-ball-super-thumbnail.jpg";
import image2 from "./../../assets//img/1.jpg";
import image3 from "./../../assets/img/2.jpg";
import image4 from "./../../assets/img/3.jpg";
import image5 from "./../../assets/img/4.jpg";
import image7 from "./../../assets/img/6.jpg";
import image8 from "./../../assets/img/7.jpg";
import image9 from "./../../assets/img/8.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import "./Home.scss";
const Home = () => {
  return (
    <>
      <div className="home-container bg-[#1f1d2b]">
        <ul className="home-title list-disc ml-6 text-xl text-[#d8caca] font-bold">
          <li>
            Xem anime xảy ra tình trạng lag, các bạn dùng 1.1.1.1 hoặc 4G để xem
            cho đỡ lag nhé.
          </li>
          <li>
            Cú pháp tìm anime nhanh nhất trên google: [tên anime] +
            AnimeAZ.ONLINE
          </li>
          <li>
            Nếu một ngày bạn không thể truy cập{" "}
            <span className="text-[#fff305]"> ANIMEAZ.ONLINE</span> - Hãy vào{" "}
            <span className="text-[#fff305]"> ANIMEAZ.VIP</span> bạn nhé!
          </li>
          <li>
            Quảng cáo trên site để có kinh phí duy trì và phát triển, mong bạn
            thông cảm
          </li>
        </ul>
      </div>

      <div className="swiper-home">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <img src={image1} alt="ảnh lỗi" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={image2} alt="ảnh lỗi" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={image3} alt="ảnh lỗi" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={image4} alt="ảnh lỗi" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={image1} alt="ảnh lỗi" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={image5} alt="ảnh lỗi" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={image7} alt="ảnh lỗi" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={image8} alt="ảnh lỗi" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={image1} alt="ảnh lỗi" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Home;
