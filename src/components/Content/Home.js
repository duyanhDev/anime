import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "./../../assets/img/dragon-ball-super-thumbnail.jpg";
import image2 from "./../../assets/img/1.jpg";
import image3 from "./../../assets/img/2.jpg";
import image4 from "./../../assets/img/3.jpg";
import image5 from "./../../assets/img/4.jpg";
import image7 from "./../../assets/img/6.jpg";
import image8 from "./../../assets/img/7.jpg";
import { FaFire } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import "./Home.scss";
import { getMovieOdd } from "../../Apiserver/Apiserver";
import { useEffect, useState } from "react";
import { HiOutlineSparkles } from "react-icons/hi2";
import MovieUpdateNew from "../MovieUpdate/MovieUpdateNew";
import { useNavigate } from "react-router-dom";
import SeriesMovie from "../SeriesMovie/SeriesMovie";
const Home = () => {
  const navigate = useNavigate();
  const [Movie, setMovie] = useState([]);
  const handleCickMovie = (item) => {
    navigate(`phim/${item.slug}`);
  };
  const handleCickMovieOdd = (movie) => {
    navigate(`phim/${movie.slug}`);
  };
  const handleCickMovieEven = (item) => {
    console.log(item);
    navigate(`phim/${item.slug}`);
  };
  useEffect(() => {
    fetchApiGetOdd();
  }, []);

  const fetchApiGetOdd = async () => {
    let res = await getMovieOdd();
    if (res && res.data && res.data.data && res.data.data.items) {
      // Structure the data into groups of 5 images
      const items = res.data.data.items;
      const groupedItems = [];
      for (let i = 0; i < items.length; i += 5) {
        groupedItems.push(items.slice(i, i + 5));
      }
      setMovie(groupedItems);
    }
  };

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

      <div className="title">
        <span className="flex items-center justify-center text-[#f0e2e2] font-bold text-xl">
          <FaFire />
          ANIMEAZ
        </span>
        <span className="text-[#f0e2e2] font-bold text-xl">XEM THÊM</span>
      </div>

      <div className="swiper-home">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <img src={image1} alt="ảnh lỗi" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image2} alt="ảnh lỗi" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image3} alt="ảnh lỗi" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image4} alt="ảnh lỗi" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image1} alt="ảnh lỗi" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image5} alt="ảnh lỗi" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image7} alt="ảnh lỗi" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image8} alt="ảnh lỗi" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image1} alt="ảnh lỗi" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="update">
        <span className="flex items-center justify-center text-[#f0e2e2] font-bold text-xl">
          <FaFire />
          PHIM LẺ
        </span>
        <span className="text-[#f0e2e2] font-bold text-xl">XEM THÊM</span>
      </div>
      <div className="content-anime">
        <Swiper spaceBetween={50} slidesPerView={1} className="mySwiper">
          {Movie.map((imageGroup, index) => (
            <SwiperSlide key={index}>
              <div className="content-anime">
                {imageGroup.map((movie, idx) => (
                  <div key={idx} className="movie">
                    <img
                      src={`https://img.phimapi.com/${movie.thumb_url}`}
                      className="w-32 h-44"
                      alt={`slide-${index}-img-${idx}`}
                    />
                    <span
                      className="play"
                      onClick={() => handleCickMovieOdd(movie)}
                    >
                      <FaPlay />
                    </span>
                    <span className="name-movie">{movie.name}</span>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="title-1 absolute">
        <span className="flex items-center justify-center text-[#f0e2e2] font-bold text-xl">
          <HiOutlineSparkles />
          PHIM MỚI CẬP NHẬT
        </span>
        <span className="text-[#f0e2e2] font-bold text-xl">XEM THÊM</span>
      </div>

      <div className="content-update">
        <MovieUpdateNew handleCickMovie={handleCickMovie} />
      </div>
      <div className="title-2 absolute">
        <span className="flex items-center justify-center text-[#f0e2e2] font-bold text-xl">
          <HiOutlineSparkles />
          PHIM BỘ
        </span>
        <span className="text-[#f0e2e2] font-bold text-xl">XEM THÊM</span>
      </div>
      <div className="content-phimbo">
        <SeriesMovie handleCickMovieEven={handleCickMovieEven} />
      </div>
    </>
  );
};

export default Home;
