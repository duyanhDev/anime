import { useParams } from "react-router-dom";
import { getLiveMovie } from "../../Apiserver/Apiserver";
import { useState, useEffect } from "react";
const Content = () => {
  const [data, setData] = useState("");
  const params = useParams();

  useEffect(() => {
    fetchApiLiveMovie();
  }, []);
  const fetchApiLiveMovie = async () => {
    const res = await getLiveMovie(params.slug);
    console.log(res);
  };

  return (
    <div>
      <div>hello duy</div>
      <div>hello duy</div>
    </div>
  );
};

export default Content;
