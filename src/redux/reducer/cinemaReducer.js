
   
import { GET_INFO_CINEMA  } from "../actions/type/cinemaType";

const stateDefault = {
    cinema: []
}



export const CinemaReducer = (state=stateDefault,action) =>{

    switch (action.type) {
      
        case GET_INFO_CINEMA : {
            state.cinema = action.cinema;
            return {...state};
        }

        default: return {...state}
            break;
    }
}