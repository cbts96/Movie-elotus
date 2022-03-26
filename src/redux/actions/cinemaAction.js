import { manageFilmService } from "../../services/manageFilmService";
import { GET_INFO_CINEMA } from "./type/cinemaType";

export const getInfoCinema = () => {
  return async (dispatch) => {
    try {
      let result = await manageFilmService.getInfoCinema();
      dispatch({ type: GET_INFO_CINEMA, cinema: result.data.content });
    } catch (err) {
      console.log("Something went wrong", err);
    }
  };
};
