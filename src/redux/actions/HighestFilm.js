import { manageFilmService } from "../../services/manageFilmService";
import {GET_HIGHEST } from "./type/FilmType";

export const getHighestAction = () => {
  return async (dispatch) => {
    try {
      const result = await manageFilmService.getHighRated();
      dispatch({ type: GET_HIGHEST, highest: result.data.results });
      console.log(result);
    } catch (err) {
      console.log("Err", err);
    }
  };
};