import { manageFilmService } from "../../services/manageFilmService";
import { SET_CAROUSEL } from "./type/carouselType";

export const getCarouselAction = () => {
  return async (dispatch) => {
    try {
      let result = await manageFilmService.getInfoBanner();
      //console.log(result.data.results)
      dispatch({ type: SET_CAROUSEL, banner: result.data.results });
    } catch (err) {
      console.log("Something went wrong", err);
    }
  };
};
