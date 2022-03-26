import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import styleSlick from "./MultipleRowSlick.module.css";

import Film_Flip from "../Film/Film_Flip";
import Film_Flip_UC from "../Film/Film_Flip_UC";
import { useDispatch, useSelector } from "react-redux";
import {
  getInfoNPListAction,
  getInfoUCListAction,
} from "../../redux/actions/filmAction";
import Search from "../Search/Search";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block", marginRight: "55px" }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block", zIndex: 100, marginLeft: "25px" }}
      onClick={onClick}
    ></div>
  );
}

const MultipleRowSlick = (props) => {
  const dispatch = useDispatch();
  const [switchList, setSwitchList] = useState(true);
  const [search, setSearch] = useState(true);
  const { arrNPFilm } = useSelector((state) => ({ ...state }));
  const { arrUCFilm } = useSelector((state) => ({ ...state }));
  
  useEffect(() => {
    const action = getInfoNPListAction();
    dispatch(action);
    dispatch(getInfoUCListAction());
  }, []);
  const handleSearchChange=(value)=>{
    setSearch(value);
  }
  //const filterSearch= arrNPFilm.arrNPFilm.filter(a=>a.name.toLowerCase().includes(search.toLowerCase()))
  const renderFilms = () => {
    return arrNPFilm.arrNPFilm.map((item, index) => {
      return (
        <div className="mt-2" key={item.id}>
          
          <Film_Flip item={item} />
        </div>
      );
    });
  };
  const renderFilmsUC = () => {
    return arrUCFilm.arrUCFilm.map((item, index) => {
      return (
        <div className="mt-2" key={item.id}>
          <Film_Flip_UC item={item} />
        </div>
      );
    });
  };



  const settings = {
    className: "center variable-width",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const handleSwitchList = (state) => {
    setSwitchList((switchList) => !switchList);
  };

  return (
    <div>
      <button
        onClick={handleSwitchList}
        className={` px-8 py-3 font-semibold rounded bg-gray-800 text-white mr-2`}
      >
        NOW PLAYING
      </button>
      <button
        onClick={handleSwitchList}
        className={` px-8 py-3 font-semibold rounded bg-white text-gray-800 border-gray-800 border`}
      >
        UPCOMING
      </button>
      <div className="flex flex-row-reverse">

      <Search handleChange={handleSearchChange} />
      </div>
      <Slider {...settings}>
        {switchList ? renderFilms() : renderFilmsUC()}
      </Slider>
    </div>
  );
};

export default MultipleRowSlick;
