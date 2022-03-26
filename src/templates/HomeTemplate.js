import { Route } from "react-router-dom";
import FooterBottom from "../layouts/FooterBottom";

import Header from "../layouts/Header";
import HomeCarousel from "../templates/HomeCarousel/HomeCarousel";

const HomeTemplate = (props) => {
  const { Component, ...restProps } = props;

  return (
    
    <Route
      {...restProps}
      render={(propsRoutes) => {
        return (
          <>
          
            <Header {...propsRoutes} />
            <HomeCarousel {...propsRoutes} />
            <Component {...propsRoutes} />
            <FooterBottom />
          
          </>
        );
      }}
    />
    
  );
};

export default HomeTemplate;
