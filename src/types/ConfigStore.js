import {combineReducers,createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {carouselReducer} from "../redux/reducer/carouselReducer"
import { CinemaReducer } from "../redux/reducer/cinemaReducer";
import { filmDetailReducer } from "../redux/reducer/filmDetailReducer";
import { filmHighestReducer } from "../redux/reducer/filmHighestReducer";
import { filmNPReducer } from "../redux/reducer/filmNPReducer";
import {filmReducer} from "../redux/reducer/filmReducer";
import { filmUCReducer } from "../redux/reducer/filmUCReducer";
import { authReducer } from "../redux/reducer/authReducer";
const rootReducer= combineReducers({
    carousel:carouselReducer,
    arrFilm: filmReducer,
    cinema:CinemaReducer,
    arrNPFilm:filmNPReducer,
    arrUCFilm:filmUCReducer,
    detail:filmDetailReducer,
    highest:filmHighestReducer,
    user:authReducer,
    
})
export const store= createStore(rootReducer,applyMiddleware(thunk));