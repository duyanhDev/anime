import axios from "./../Untils/AxiosConfig";

const getMovieOdd = () => {
  return axios.get("v1/api/danh-sach/phim-le");
};

const getMovieUpdate = (id) => {
  return axios.get(`danh-sach/phim-moi-cap-nhat?page=${id}`);
};

const getLiveMovie = (slug) => {
  return axios.get(`phim/${slug}`);
};

const getSeriesMovie = (id) => {
  return axios.get(`v1/api/danh-sach/phim-bo?page=${id}`);
};
export { getMovieOdd, getMovieUpdate, getLiveMovie, getSeriesMovie };
