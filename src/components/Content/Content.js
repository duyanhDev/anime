import { useParams, useNavigate, Link } from "react-router-dom";
import { getLiveMovie } from "../../Apiserver/Apiserver";
import { useState, useEffect } from "react";

import "./Content.scss";

const Content = () => {
  const [data, setData] = useState(null);
  const [episodes, setEpisodes] = useState(null);
  const params = useParams();
  const Navigate = useNavigate();
  useEffect(() => {
    const fetchApiLiveMovie = async () => {
      const res = await getLiveMovie(params.slug);
      console.log(res);
      if (res && res.data && res.data.movie) {
        setData(res.data.movie);
      }

      if (res && res.data && res.data.episodes) {
        setEpisodes(res.data.episodes);
      }
    };

    fetchApiLiveMovie();
  }, [params.slug]);

  if (!data || !episodes) {
    return <div>Loading...</div>;
  }

  const categoryNames = data.category.map((item) => item.name);
  const country = data.country.map((item) => item.name);
  console.log(country);
  const createdTime = new Date(data.created.time);
  const formattedDateTime = createdTime.toLocaleString("vi-VN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const episodes_Curent = episodes.map((item) => {
    return item.server_data;
  });

  const link = episodes.map((item) => {
    return item.server_data.map((link, index) => {
      return link.link_embed;
    });
  });

  console.log(link);
  return (
    <>
      <div className=" w-3/4 absolute mt-4 ml-4 item-category md:max-w-2xl">
        <ul className="flex flex-wrap gap-4 item-category__title">
          <li className="text-[#eee] font-serif font-medium text-xl">
            Trang chủ
          </li>
          <li className="text-[#eee] font-serif font-medium text-xl">Anime</li>
          <li className="text-[#eee] font-serif font-medium text-xl">
            Đời thường
          </li>
          <li className="text-[#eee] font-serif font-medium text-xl">
            Âm nhạc
          </li>
          <li className="text-[#eee] font-serif font-medium text-xl">
            Thông tin
          </li>
        </ul>
      </div>

      <div className="w-4/5 absolute top-24 left-8 detail grid grid-cols-[0.8fr_2fr] gap-4">
        <div className="detail-imgae">
          <img
            src={data.thumb_url}
            alt="IMG"
            className="details__card-img lazy w-full object-cover"
          />
          <div className="detail-btn gap-3">
            <button className="bg-[#952929] p-2 text-[#fff]">
              <Link to={link.join(",")} target="_blank">
                Xem phim
              </Link>
            </button>
            <button className="bg-[#1a4672] p-2 text-[#fff]">Lưu video</button>
          </div>
        </div>
        <div className="deatail-content">
          <div className="text-movie font-bold text-4xl text-[#fff]">
            {data.name}
          </div>
          <div className="mt-3 text-[#fff]"> Tác giả: {data.actor}</div>
          <ul className="mt-4 detail-category">
            <li>
              Trạng thái:{" "}
              <span>
                {data.episode_current}/{data.episode_total}
              </span>
            </li>
            <li>
              Thể loại:{" "}
              <span className="text-[#fff305bd]">
                {" "}
                {categoryNames.join(", ")}
              </span>
            </li>
            <li>Thời gian chiếu : {formattedDateTime}</li>
            <li>Năm phát hành: {data.year}</li>
            <li>
              Quốc gia:{" "}
              <span className="text-[#fff305bd]">{country.join(",")}</span>
            </li>
            <li>
              Tập Phim:
              {episodes_Curent.map((item) => {
                return item.map((item, index) => {
                  return (
                    <span
                      key={index}
                      className="episode"
                      // onClick={() => handleClikMovie(item)}
                    >
                      <Link to={item.link_embed}>{item.name}</Link>
                    </span>
                  );
                });
              })}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Content;
