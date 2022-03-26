import React, { useEffect, useState } from "react";
import CardFilm from "../components/Card";
import HomeMenu from "./HomeMenu";
import SlickCarousel from "../components/SlickCarousel/MultipleRowSlick";
import { Spin, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  getFilmInfoAction,
  getInfoNPListAction,
} from "../redux/actions/filmAction";
import { getInfoCinema } from "../redux/actions/cinemaAction";
function Home() {
  const dispatch = useDispatch();
  const { arrFilm } = useSelector((state) => ({ ...state }));
  const { cinema } = useSelector((state) => ({ ...state }));
  const { arrNPFilm } = useSelector((state) => ({ ...state }));
  //console.log(arrFilm)
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const action = getFilmInfoAction();
    dispatch(action);
    dispatch(getInfoCinema());
    setTimeout(()=>{
      setLoading(false)
    },4000)
  }, []);
  return (
    <div>
      {loading ? (
        <Space style={{display:"flex",justifyContent:"center"}}>
          <Spin size="large" />
        </Space>
      ) : (
        <>
          <SlickCarousel />
          <HomeMenu heThongRapChieu={cinema} />
          <div className="flex justify-around">
            <CardFilm />
            <CardFilm />
            <CardFilm />
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
