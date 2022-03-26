import { baseService } from "./baseService";
import { API_KEY } from "../utils/settings/config";
export class ManageFilmService extends baseService {
  constructor() {
    super();
  }
  getInfoBanner = () => {
    return this.get(`/3/movie/popular?api_key=${API_KEY}`);
  };
  getInfoNPList = (name = "", ID) => {
    return this.get(`/3/movie/now_playing?api_key=${API_KEY}`);
  };
  getInfoUCList = (name = "", ID) => {
    return this.get(`/3/movie/upcoming?api_key=${API_KEY}`);
  };
  getFilmDetail = (id) => {
    return this.get(`/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
  };
  getHighRated = (id) => {
    return this.get(`/3/movie/top_rated?api_key=${API_KEY}&language=en-US`);
  };
  // getInfoCinema=()=>{
  //     return this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`)
  // }
}

export const manageFilmService = new ManageFilmService();
