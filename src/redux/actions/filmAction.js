import { manageFilmService } from "../../services/manageFilmService";
import { GET_FILM_DETAIL, GET_LIST_FILM, GET_NP_LIST_FILM, GET_UC_LIST_FILM } from "./type/FilmType";

export const getFilmInfoAction = (tenPhim = "") => {
  return async (dispatch) => {
    try {
      const result = await manageFilmService.getInfoFilmList(tenPhim);
      dispatch({ type: GET_LIST_FILM, arrFilm: result.data.content });
      console.log(result);
    } catch (err) {
      console.log("Err", err);
    }
  };
};
export const getInfoNPListAction = () => {
  return async (dispatch) => {
    try {
      const result = await manageFilmService.getInfoNPList();
      console.log(result);
      
      dispatch({ type: GET_NP_LIST_FILM, arrNPFilm: result.data.results });
    } catch (err) {
      console.log("Err", err);
    }
  };
};
export const getInfoUCListAction = () => {
  return async (dispatch) => {
    try {
      const result = await manageFilmService.getInfoUCList();
      console.log(result);
      
      dispatch({ type: GET_UC_LIST_FILM, arrUCFilm: result.data.results });
    } catch (err) {
      console.log("Err", err);
    }
  };
};
export const getInfoDetailtAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await manageFilmService.getFilmDetail(id);
      console.log(result.data);
      
      dispatch({ type: GET_FILM_DETAIL, detail: result.data });
    } catch (err) {
      console.log("Err", err);
    }
  };
};
