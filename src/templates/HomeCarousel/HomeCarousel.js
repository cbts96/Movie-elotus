import { Carousel } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCarouselAction } from "../../redux/actions/carouselAction";
import { IMG_HOST } from "../../utils/settings/config";
// import Home from '../../pages/Home';
const contentStyle = {
  height: "560px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    objectFit:"cover"
};


const HomeCarousel = () => {
  const { carousel } = useSelector((state) => ({ ...state }));
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getCarouselAction())
  },[dispatch])
  
  
  const renderImg = () => (
    carousel.banner.map(value=>
      <div key={value.id} >
        <h3 style={{...contentStyle,backgroundImage:`url(${IMG_HOST}${value.poster_path})`}}>
          <img src={`${IMG_HOST}${value.poster_path}`} className="opacity-0"  alt={value.id} />
         
        </h3>
      </div>
    
     )
    
  )
  return (
    <Carousel style={{ position: "relative", zIndex: 1 }} autoplay>
      {renderImg()}
    </Carousel>
  );
};

export default HomeCarousel;
